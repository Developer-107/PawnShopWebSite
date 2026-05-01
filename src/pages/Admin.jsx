import ThreeMovingDots from "../components/ThreeMovingDots.jsx";
import axios from "axios";
import { EditIcon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import api from "@/api/axios";
import LogoutButton from "../components/Logout.jsx";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  const [visibleCount, setVisibleCount] = useState(12);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await api.get("/items");
        setProducts(res.data.list);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex p-6 w-full h-[75vh] justify-center items-center">
        <ThreeMovingDots />
      </div>
    );

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-6 font-medium flex max-w-[1107px] w-full justify-between items-center">
        <div>
        <h1 className="text-[32px] ">პროდუქტები</h1>
        <p className="text-[14px]"> მართე პროდუქტები</p>
        </div>

        
        <LogoutButton />

      </div>
      <div className="flex flex-col w-full h-full my-4 bg-[#f2f3f5] border-y-2 border-gray-200  p-6 gap-7 items-center justify-center">
        <div className="flex flex-col bg-white w-full h-full border rounded border-gray-200 p-5 pb-0 max-w-[1107px]">
          <div className="flex">
            <div className="font-medium">პროდუქტები</div>

            <Link
              to="/admin/products/new"
              className="ml-auto font-medium bg-[#2e609e] text-white px-4 py-2 rounded hover:bg-[#3a8bbd] transition-colors text-sm"
            >
              დაამატე პროდუქტი
            </Link>
          </div>
          <br />
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="py-3 px-4 font-medium">ბრენდი</th>
                  <th className="py-3 px-4 font-medium">მოდელი</th>
                  <th className="py-3 px-4 font-medium">მდგომარეობა/აღწერა</th>
                  <th className="py-3 px-4 font-medium">ფასდაკლებული ფასი</th>
                  <th className="py-3 px-4 font-medium">ფასი</th>
                  <th className="py-3 px-4 font-medium">ნივთის ტიპი</th>
                  <th className="py-3 px-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {products?.slice(0, visibleCount).map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 font-medium">
                      <Link
                        to={`/item/${product.id}`}
                        className="hover:text-[#2e609e]"
                      >
                        {product.brand || "—"}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {product.model || "—"}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {product.state || "—"}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {product.pricesale || "—"}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {product.pricebefore || "—"}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {product.type || "—"}
                    </td>

                    <td className="py-3 px-4">
                      <Link
                        to={`/admin/products/${product.id}`}
                        className="text-[#2e609e] hover:text-[#3a8bbd]"
                      >
                        <EditIcon size={18} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />

          <div
            direction={"column"}
            className="w-full justify-center! items-center mt-auto mb-4"
            gap={"5"}
          >
            {visibleCount < products.length && (
              <div className="flex justify-center mt-4 ">
                <button
                  onClick={handleShowMore}
                  className="buttonInItems md:w-[170px] w-[100%]"
                >
                  მეტის ნახვა
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
