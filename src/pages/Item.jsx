import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemSkeleton from "../components/ItemSkeleton";
import api from "../api/axios.js";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  ImageMinus,
  ImagePlus,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

export default function Item() {
  const location = useLocation();

  const { item: stateItem } = location.state || {};
  const { id } = useParams();
  const [item, setItem] = useState(stateItem);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img?.url,
  }));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/items/${id}`);
        setItem(res.data.item);
        setImages(res.data.item.images);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <ItemSkeleton />;

  return (
    <>
      <div id="item" className="flex justify-center">
        <div className="flex flex-col mt-[5rem] gap-10 contentContainer items-center bg-white p-10 py-20">
          <div className="grid grid-cols-3">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img?.url}
                alt={"item image"}
                className="col-span-1 w-auto h-40 object-cover lg:mr-19 mr-0 mb-2 rounded cursor-pointer transition duration-300 hover:opacity-80"
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
              />
            ))}
          </div>

          <div className="flex flex-col itemPageDiv justify-start w-full">
            <h1 className="ItemPage ">{item?.title}</h1>
            <div className="flex flex-col itemPageDivSubD mt-5 w-full">
              <ul className="w-full flex flex-col gap-5">
                <li className="flex w-full">
                  <p className="">მდგომარეობა:</p>{" "}
                  <p className="ml-auto"> {item?.state}</p>
                </li>

                <li className="flex w-full">
                  <p className="">ბრენდი:</p>{" "}
                  <p className="ml-auto"> {item?.brand}</p>
                </li>

                <li className="flex w-full">
                  <p className="">მოდელი:</p>{" "}
                  <p className="ml-auto"> {item?.model}</p>
                </li>
                <li className="flex w-full">
                  <p className="">დაგვიკავშირდით:</p>{" "}
                  <p className="ml-auto"> (+995) {item?.mobnumber}</p>
                </li>
              </ul>
              <div className="flex sm:flex-row flex-col  itemPageDivSubDGray items-center">
                <p className="md:text-[25.505px] sm:text-[20.505px] text-[22.934px] text-green-700  font-bold self-start sm:pl-[22.5px] pl-0 sm:mt-[4px] mt-[7px]">
                  {item?.pricesale}₾{" "}
                  <span className="text-[14px] text-semibold line-through text-gray-400 ml-1">
                    {item?.pricebefore}₾
                  </span>
                </p>
                <Link
                  to="https://maps.app.goo.gl/pmftPPBSybyrtbwA7?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto buttonInItemsBuy !text-[white] !py-4 !px-10 sm:!mt-0 !mt-7 !mb-0 "
                >
                  მხოლოდ მაღაზიაში
                </Link>
              </div>
            </div>
            <br />
          </div>
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
          plugins={[Zoom]}
          animation={{ zoom: 500 }}
          className="stroke-1!"
          zoom={{
            maxZoomPixelRatio: 2.5,
            scrollToZoom: true,
            doubleTapDelay: 300,
          }}
          styles={{
            container: {
              backgroundColor: "rgba(235, 235, 235, 0.90)",
              boxShadow: "none",
            },
            button: {
              color: "rgba(0,0,0,0.75)",
              filter: "none",
              textShadow: "none",
            },
            icon: {
              color: "rgba(0,0,0,0.75)",
            },
          }}
          render={{
            iconPrev: () => <ChevronLeft strokeWidth={1.53} />,
            iconNext: () => <ChevronRight strokeWidth={1.53} />,
            iconClose: () => <X strokeWidth={1.53} />,
            iconZoomIn: () => <ZoomIn strokeWidth={1.53} size={19} />,
            iconZoomOut: () => <ZoomOut strokeWidth={1.53} size={19} />,
          }}
        />
      </div>
    </>
  );
}
