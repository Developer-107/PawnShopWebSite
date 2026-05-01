import { useEffect, useState } from "react";
import api from "../api/axios";
import ThreeMovingDots from "../components/ThreeMovingDots";
import { ImageDropzone } from "../components/ImageDropZone";
import { uploadToCloudinary } from "../../utils/UploadToCloudinary";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [state, setState] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [type, setType] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delWidnowOpen, setDelWindowOpen] = useState(false);
  const [delLoading, setDelLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const categories = [
    { value: "მობილური", label: "მობილური" },
    { value: "ტელევიზორი", label: "ტელევიზორი" },
    { value: "მაცივარი", label: "მაცივარი" },
    { value: "სარეცხი მანქანა", label: "სარეცხი მანქანა" },
    { value: "კონსოლი", label: "კონსოლი" },
    { value: "ყურსასმენი", label: "ყურსასმენი" },
    { value: "დამტენი", label: "დამტენი" },
    { value: "სხვა", label: "სხვა" },
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/items/${id}`);
        const productData = res.data.item;

        if (!productData) {
          alert("Product not found");
          navigate("/admin");
          return;
        }

        setBrand(productData.brand || "");
        setImageFiles(
          productData.images ? productData.images.map((img) => img.url) : [],
        );
        setModel(productData.model || "");
        setState(productData.state || "");
        setPriceSale(productData.pricesale || "");
        setPriceBefore(productData.pricebefore || "");
        setType({ value: productData.type, label: productData.type } || "");
      } catch (err) {
        console.error("პროდუქტი ვერ მოიძებნა:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    setDelLoading(true);
    try {
      api.delete(`/admin/items/${id}`);
      alert("პროდუქტი წარმატებით წაიშალა!");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      alert("პროდუქტი წაშლა ვერ მოხერხდა");
    } finally {
      setDelLoading(false);
    }
  };

  const handleSubmit = async () => {
    // Check required fields
    if (!brand.trim()) return alert("ბრენდის მიითება აუცილებელია");
    if (!model.trim()) return alert("მოდელის მითითება აუცილებელია");
    if (!state.trim()) return alert("მდგომარეობის მითითება აუცილებელია");
    if (!priceSale) return alert("ფასდაკლებული ფასის მითითება აუცილებელია");
    if (!priceBefore) return alert("ფასის აუცილებელია");
    if (!type) return alert("ტიპის მითითება აუცილებელია");
    if (!imageFiles.length === 0) return alert("პროდუქტის სურათი აუცილებელია");

    setLoading(true);
    try {
      // separate existing URLs vs new Files
      const existingUrls = imageFiles.filter((img) => typeof img === "string");
      const filesToUpload = imageFiles.filter((img) => img instanceof File);

      // upload only new files
      const uploadedUrls = await Promise.all(
        filesToUpload.map((file) => uploadToCloudinary(file)),
      );

      const imageUrls = [...existingUrls, ...uploadedUrls];

      const res = await api.put(`/admin/items/${id}`, {
        brand,
        model,
        state,
        priceSale,
        priceBefore,
        imageUrls,
        type: type.value,
      });
      alert(
        "პროდუქტი წარმატებით განახლდა: " +
          res.data.item.brand +
          res.data.item.model,
      );
      setBrand("");
      setModel("");
      setState("");
      setPriceSale("");
      setPriceBefore("");
      setType("");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      alert("პროდუქტის განახლება ვერ მოხერხდა");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex p-6 w-full h-[75vh] justify-center items-center">
        <ThreeMovingDots />
      </div>
    );

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-6 font-medium flex flex-col max-w-[1107px] w-full">
        <h1 className="text-[32px]">გაანახლე პროდუქტი</h1>
        <p className="text-[14px]">
          გაანახლე მოცემული პროდუქტის შესახებ ინფორმაცია
        </p>
      </div>

      <div className="flex flex-col w-full h-full my-4 bg-[#f2f3f5] border-y-2 border-gray-200 p-6 gap-7 items-center ">
        <div className="flex flex-col border bg-white border-gray-200 p-8 rounded-md w-full max-w-[1107px]">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <input
              name="brand"
              placeholder="ბრენდი"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className=" bg-gray-50 border rounded px-3 py-2"
            />

            <input
              name="model"
              placeholder="მოდელი"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="bg-gray-50 border rounded px-3 py-2"
            />

            <Select
              options={categories}
              value={type}
              onChange={setType}
              placeholder={"კატეგორია"}
            />

            <input
              name="state"
              placeholder="მდგომარეობა, აღწერა"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="bg-gray-50 border rounded px-3 py-2"
            />
            <input
              name="priseSale"
              placeholder="ფასდაკლებული ფასი"
              value={priceSale}
              onChange={(e) => setPriceSale(e.target.value)}
              className="bg-gray-50 border rounded px-3 py-2"
            />
            <input
              name="priceBefore"
              placeholder="ფასი"
              value={priceBefore}
              onChange={(e) => setPriceBefore(e.target.value)}
              className="bg-gray-50 border rounded px-3 py-2"
            />

            <div className="col-span-2 my-2">
              <label className="font-medium mb-1 text-sm text-gray-700">
                სურათები
              </label>
              <ImageDropzone
                files={imageFiles}
                onChange={(files) => setImageFiles(files)}
              />
            </div>
          </div>

          <div className="flex col-span-2 mt-4 gap-5">
            <button
              onClick={() => setDelWindowOpen(true)}
              disabled={delLoading}
              className={`${delWidnowOpen ? "opacity-0 -translate-x-47 pointer-events-none" : "opacity-100 scale-100"} transition-all duration-700 flex font-medium w-1/6 bg-white text-sm text-red-900 border border-red-900 hover:bg-red-900 hover:text-white px-4 py-2 rounded cursor-pointer justify-center`}
            >
              {delLoading ? <ThreeMovingDots /> : "პროდუქტის წაშლა"}
            </button>

            <div
              className={`flex gap-2 font-medium w-1/6 ${delWidnowOpen ? "opacity-100 -translate-x-53.75" : "opacity-0 scale-100"} transition-all duration-700`}
            >
              <button
                onClick={() => setDelWindowOpen(false)}
                disabled={delLoading}
                className={`flex font-medium w-1/2 bg-white text-sm text-[#2e609e] border border-[#2e609e] hover:bg-[#2e609e] hover:text-white px-4 py-2 rounded cursor-pointer transition justify-center`}
              >
                უარყოფა
              </button>

              <button
                onClick={handleDelete}
                disabled={delLoading}
                className={` flex font-medium w-1/2 bg-white text-sm text-red-900 border border-red-900 hover:bg-red-900 hover:text-white px-4 py-2 rounded cursor-pointer transition justify-center`}
              >
                {delLoading ? <ThreeMovingDots /> : "წაშლა"}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={submitLoading}
              className="flex font-medium w-1/4 ml-auto self-end bg-white text-sm text-[#2e609e] border border-[#2e609e] hover:bg-[#2e609e] hover:text-white px-4 py-2 rounded cursor-pointer transition justify-center"
            >
              {submitLoading ? <ThreeMovingDots /> : "განაახლე პროდუქტი"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
