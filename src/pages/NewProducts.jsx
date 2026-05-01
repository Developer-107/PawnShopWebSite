import { useEffect, useState } from "react";
import api from "../api/axios";
import ThreeMovingDots from "../components/ThreeMovingDots";
import { ImageDropzone } from "../components/ImageDropZone";
import { uploadToCloudinary } from "../../utils/UploadToCloudinary";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export default function NewProducts() {
  const navigate = useNavigate();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [state, setState] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [type, setType] = useState("");
  const [imageFiles, setImageFiles] = useState([]);

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async () => {
    // Check required fields
    if (!brand.trim()) return alert("ბრენდის მიითება აუცილებელია");
    if (!model.trim()) return alert("მოდელის მითითება აუცილებელია");
    if (!state.trim()) return alert("მდგომარეობის მითითება აუცილებელია");
    if (!priceSale.trim())
      return alert("ფასდაკლებული ფასის მითითება აუცილებელია");
    if (!priceBefore.trim()) return alert("ფასის აუცილებელია");
    if (!type) return alert("ტიპის მითითება აუცილებელია");
    if (!imageFiles.length === 0) return alert("პროდუქტის სურათი აუცილებელია");

    setLoading(true);
    try {
      const imageUrls = await Promise.all(
        imageFiles.map((file) => uploadToCloudinary(file)),
      );

      const res = await api.post("/admin/items", {
        brand,
        model,
        state,
        priceSale,
        priceBefore,
        imageUrls,
        type: type.value,
      });
      alert(
        "პროდუქტი წარმატებით დამატდა: " +
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
      alert("პროდუქტის დამატება ვერ მოხერხდა");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-6 font-medium flex flex-col max-w-[1107px] w-full">
        <h1 className="text-[32px]">დაამატე პროდუქტი</h1>
        <p className="text-[14px]">დაამატე ახალი პროდუქტი</p>
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

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex font-medium mt-4 w-1/4 self-end bg-white text-sm text-[#2e609e] border border-[#2e609e] hover:bg-[#2e609e] hover:text-white px-4 py-2 rounded cursor-pointer transition justify-center"
          >
            {loading ? <ThreeMovingDots /> : "დაამატე პროდუქტი"}
          </button>
        </div>
      </div>
    </div>
  );
}
