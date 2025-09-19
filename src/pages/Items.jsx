import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Items() {
  const { pathname, hash } = useLocation();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(49999);
  const minLimit = 0;
  const maxLimit = 50000;

  const [chosenFilter, setChosenFilter] = useState("ყველა");
  const [selectedCategory, setSelectedCategory] = useState("ყველა"); 

  
  const list = [
    {
      id: 1,
      type: "ტელევიზორი",
      brand: "Samsung ",
      model: "G10i",
      state: "უხმარი",
      priceSale: 1000,
      priceBefore: 1400,
      url: "https://news.samsung.com/my/wp-content/uploads/2024/01/20240104_01_01.jpg",
    },
    {
      id: 2,
      type: "ტელევიზორი",
      brand: "LG ",
      model: "OLED C1",
      state: "უხმარი",
      priceSale: 2000,
      priceBefore: 2500,
      url: "https://www.lg.com/us/images/tvs/md07506472/gallery/desktop-01.jpg",
    },
    {
      id: 3,
      type: "მობილური",
      brand: "iPhone ",
      model: "14",
      state: "უხმარი",
      priceSale: 1400,
      priceBefore: 1700,
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-purple-select-2022",
    },
    {
      id: 4,
      type: "მობილური",
      brand: "Samsung Galaxy",
      model: " S23",
      state: "უხმარი",
      priceSale: 1300,
      priceBefore: 1600,
      url: "https://images.samsung.com/is/image/samsung/p6pim/levant/sm-s911ezwdmea/gallery/levant-galaxy-s23-s911-445380-sm-s911ezwdmea-530490551?$650_519_PNG$",
    },
    {
      id: 5,
      type: "ლეპტოპი",
      brand: "Dell",
      model: " XPS 15",
      state: "უხმარი",
      priceSale: 2200,
      priceBefore: 2500,
      url: "https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/xps-15-9530-laptop.jpg",
    },
    {
      id: 6,
      type: "ლეპტოპი",
      brand: "MacBook ",
      model: "Pro 16",
      state: "უხმარი",
      priceSale: 3500,
      priceBefore: 4000,
      url: "https://www.apple.com/v/macbook-pro-16/h/images/overview/hero/hero_endframe__bsza6x4fldiq_large.jpg",
    },
    {
      id: 7,
      type: "ყურსასმენი",
      brand: "Sony",
      model: " WH-1000XM5",
      state: "უხმარი",
      priceSale: 800,
      priceBefore: 1000,
      url: "https://imgstore.alta.ge/images/400/145/145736_4792_2.webp",
    },

    {
      id: 8,
      type: "ყურსასმენი",
      brand: "Sony ",
      model: "WH-1000XM5",
      state: "უხმარი",
      priceSale: 800,
      priceBefore: 1000,
      url: "https://www.sony.com/image/wh1000xm5-b.jpg",
    },
  ];

  const filteredList = list.filter(
    (item) => {
  const inPrice = item.priceSale >= min && item.priceSale <= max;
  const inCategory =
    selectedCategory === "ყველა" || item.type === selectedCategory;
  return inPrice && inCategory;
}
  );

  const sortedList = [...filteredList].sort((a, b) => {
    switch (chosenFilter) {
      case "ფასის ზრდით":
        return a.priceSale - b.priceSale;
      case "ფასის კლებით":
        return b.priceSale - a.priceSale;
      case "ა - ჰ":
        return a.brand.localeCompare(b.brand);
      case "ჰ - ა":
        return b.brand.localeCompare(a.brand);
      default:
        return 0;
    }
  });

  const [visibleCount, setVisibleCount] = useState(12); // show 12 items initially

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12); // show 12 more items each click
  };

  const [isOpenSort, setIsOpenSort] = useState(false);

  const handleSortingClick = () => {
    setIsOpenSort(!isOpenSort);
  };

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const topPos =
          element.getBoundingClientRect().top + window.pageYOffset - 80; // navbar offset
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return (
    <>
      <div id="items" className="flex justify-center">
        <div className="flex flex-row mt-[5rem] contentContainer">
          <div className="flex flex-col items-center mr-auto">
            <div className="flex flex-row mr-auto justify-between items-center gap-[75.7px] pt-[5px]">
              <h2 className="mr-auto">ფილტრი</h2>
              <div
                onClick={() => {setMin(minLimit);
                                setMax(maxLimit);
                                setSelectedCategory("ყველა");}
                            }
                className="cleanButtn cursor-pointer"
              >
                {" "}
                გასუფთავება{" "}
              </div>
            </div>
            <br />
            <div className="filterDiv">
              <h3>ფასი</h3>

              <br />
              {/* Slider container */}
              <div className="relative h-2 mb-6">
                {/* Track background */}
                <div className="absolute w-full h-2 bg-[#a5c2e6] rounded"></div>
                {/* Selected range */}
                <div
                  className="absolute h-2 bg-[#2f62a1] rounded"
                  style={{
                    left: `${(min / maxLimit) * 100}%`,
                    right: `${100 - (max / maxLimit) * 100}%`,
                  }}
                />
                {/* Min thumb */}
                <input
                  type="range"
                  min={minLimit}
                  max={maxLimit}
                  value={min}
                  onChange={(e) =>
                    setMin(Math.min(Number(e.target.value), max - 1))
                  }
                  onBlur={() => {
                    // clamp after user finishes typing
                    if (min < minLimit) setMin(minLimit);
                    else if (min > max - 1) setMin(max - 1);
                  }}
                  className="range-min absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
                />
                {/* Max thumb */}
                <input
                  type="range"
                  min={minLimit}
                  max={maxLimit}
                  value={max}
                  onChange={(e) =>
                    setMax(Math.max(Number(e.target.value), min + 1))
                  }
                  onBlur={() => {
                    if (max > maxLimit) setMax(maxLimit);
                    else if (max < min + 1) setMax(min + 1);
                  }}
                  className=" range-max absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
                />
              </div>

              {/* Inputs */}
              <div className="flex justify-between justify-center">
                <div>
                  <label className="block text-sm pl-2">დან</label>
                  <div className="flex justify-center relative w-32 py-2">
                    <span className="absolute left-22 top-1/2 -translate-y-1/2 text-gray-600">
                      ₾
                    </span>
                    <input
                      type="number"
                      value={min}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setMin(Math.min(Math.max(val, minLimit), max - 1));
                      }}
                      className="w-28 border rounded p-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm pl-2">მდე</label>

                  <div className="flex justify-center relative w-32 py-2">
                    <span className="absolute left-22 top-1/2 -translate-y-1/2 text-gray-600">
                      ₾
                    </span>
                    <input
                      type="number"
                      value={max}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setMax(Math.max(Math.min(val, maxLimit), min + 1));
                      }}
                      className="w-28 border rounded p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="filterDiv ">
              <h3>კატეგორია</h3>
              <br />
              <ul>
                <li className={`flex flex-row items-center gap-2 category cursor-pointer ${
                    selectedCategory === "მობილური" ? "categoryActive" : ""
                }`}
                onClick={() => setSelectedCategory("მობილური")}>
                  <svg
                    className="mb-[2px]"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M11 18H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
                        stroke={` ${
                    selectedCategory === "მობილური" ? "black" : "oklch(55.1% 0.027 264.364)"
                        }`}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  მობილური
                </li>
                <li className={`flex flex-row items-center gap-2 category cursor-pointer ${
                    selectedCategory === "ტელევიზორი" ? "categoryActive" : ""
                }`}
                onClick={() => setSelectedCategory("ტელევიზორი")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="14"
                    height="14"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="12"
                      rx="2"
                      strokeWidth="2"
                    />
                    <path d="M8 21h8" strokeWidth="2" />
                  </svg>
                  ტელევიზორი
                </li>
                <li className={`flex flex-row items-center gap-2 category cursor-pointer ${
                    selectedCategory === "მაცივარი" ? "categoryActive" : ""
                }`}
                onClick={() => setSelectedCategory("მაცივარი")}>
                  <svg
                    className="mb-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="14"
                    height="14"
                  >
                    <rect
                      x="6"
                      y="2"
                      width="12"
                      height="20"
                      rx="2"
                      strokeWidth="2"
                    />
                    <line x1="6" y1="12" x2="18" y2="12" strokeWidth="2" />
                    <line x1="9" y1="7" x2="9" y2="9" strokeWidth="2" />
                  </svg>
                  მაცივარი
                </li>
                <li className={`flex flex-row items-center gap-2 category cursor-pointer ${
                    selectedCategory === "სარეცხი მანქანა" ? "categoryActive" : ""
                }`}
                onClick={() => setSelectedCategory("სარეცხი მანქანა")}>
                  <svg
                    className="mb-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="14"
                    height="14"
                  >
                    <rect
                      x="4"
                      y="3"
                      width="16"
                      height="18"
                      rx="2"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="14" r="4" strokeWidth="2" />
                    <circle cx="9" cy="6" r="1" fill="currentColor" />
                    <circle cx="12" cy="6" r="1" fill="currentColor" />
                  </svg>
                  სარეცხი მანქანა
                </li>
                <li className={`flex flex-row items-center gap-2 category cursor-pointer ${
                    selectedCategory === "კონსოლი" ? "categoryActive" : ""
                }`}
                onClick={() => setSelectedCategory("კონსოლი")}>
                  <svg
                    fill={` ${
                    selectedCategory === "კონსოლი" ? "black" : "oklch(55.1% 0.027 264.364)"
                        }`}
                    height="14px"
                    width="14px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    stroke="#00000"
                    stroke-width="1.024"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M398.056,211.231h-95.806c-2.258-6.737-8.531-11.228-15.935-11.228h-14.596v-10.265v-6.83 c0-18.359,15.462-33.432,33.821-33.432h6.354h118.991c29.692,0,53.848-24.202,53.848-53.895s-24.156-53.895-53.848-53.895H401.67 c-9.301,0-16.842,7.655-16.842,16.957c0,4.687,1.918,8.867,5.008,11.92c3.042,3.006,7.22,4.808,11.834,4.808h29.215 c11.118,0,20.163,9.091,20.163,20.211c0,11.118-9.045,20.211-20.163,20.211h-85.706h-39.637 c-36.932,0-67.505,30.183-67.505,67.116v17.095h-13.474c-7.404,0-13.678,4.491-15.935,11.228h-94.683 C51.01,211.231,0,262.627,0,325.56v28.86c0,46.498,21.996,88.13,56.182,106.207c28.626,15.137,61.712,12.217,93.835-7.993h211.828 c18.55,12.351,37.452,17.679,55.628,17.679c13.345,0,26.206-3.136,38.341-9.546C490.002,442.704,512,401.027,512,354.521v-28.959 C512,262.627,460.99,211.231,398.056,211.231z M478.316,354.521c0,33.649-15.31,64.396-38.237,76.509 c-18.684,9.871-40.702,6.678-63.763-9.057c-2.798-1.909-6.059-3.023-9.445-3.023H144.998c-3.382,0-6.686,1.112-9.482,3.016 c-23.01,15.673-44.936,18.794-63.589,8.931c-22.931-12.126-38.243-42.832-38.243-76.478v-28.86c0-44.36,35.9-80.646,80.259-80.646 h284.113c44.36,0,80.259,36.286,80.259,80.646V354.521z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M151.579,314.53h-14.596v-14.596c0-9.301-7.541-16.842-16.842-16.842s-16.842,7.541-16.842,16.842v14.596H88.702 c-9.301,0-16.842,7.541-16.842,16.842s7.541,16.842,16.842,16.842h14.596v14.596c0,9.301,7.541,16.842,16.842,16.842 s16.842-7.541,16.842-16.842v-14.596h14.596c9.301,0,16.842-7.541,16.842-16.842S160.88,314.53,151.579,314.53z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M238.035,353.828h-24.702c-9.301,0-16.842,7.541-16.842,16.842s7.541,16.842,16.842,16.842h24.702 c9.301,0,16.842-7.541,16.842-16.842S247.336,353.828,238.035,353.828z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M308.772,353.828h-25.825c-9.301,0-16.842,7.541-16.842,16.842s7.541,16.842,16.842,16.842h25.825 c9.301,0,16.842-7.541,16.842-16.842S318.073,353.828,308.772,353.828z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle
                            cx="393.016"
                            cy="362.42"
                            r="19.491"
                          ></circle>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle
                            cx="426.7"
                            cy="317.507"
                            r="19.491"
                          ></circle>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>{" "}
                  კონსოლი
                </li>
                <li className={`flex flex-row items-center gap-2 category cursor-pointer ${
                    selectedCategory === "ყურსასმენი" ? "categoryActive" : ""
                }`}
                onClick={() => setSelectedCategory("ყურსასმენი")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="14"
                    height="14"
                  >
                    <path d="M4 12a8 8 0 0116 0" strokeWidth="2" />
                    <rect
                      x="2"
                      y="12"
                      width="4"
                      height="8"
                      rx="2"
                      strokeWidth="2"
                    />
                    <rect
                      x="18"
                      y="12"
                      width="4"
                      height="8"
                      rx="2"
                      strokeWidth="2"
                    />
                  </svg>
                  ყურსასმენი
                </li>
                <li className={`flex flex-row items-center gap-2 category cursor-pointer ${
                    selectedCategory === "დამტენი" ? "categoryActive" : ""
                }`}
                onClick={() => setSelectedCategory("დამტენი")}>
                  <svg
                    className="mt-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="14"
                    height="19"
                  >
                    <rect
                      x="9"
                      y="3"
                      width="6"
                      height="9"
                      rx="1"
                      strokeWidth="2"
                    />
                    <line x1="10" y1="2" x2="10" y2="0" strokeWidth="2" />
                    <line x1="14" y1="2" x2="14" y2="0" strokeWidth="2" />
                    <path d="M12 12v5" strokeWidth="2" />
                  </svg>
                  დამტენი
                </li>
                <li className={`flex flex-row items-center gap-2 category cursor-pointer ${
                    selectedCategory === "სხვა" ? "categoryActive" : ""
                }`}
                onClick={() => setSelectedCategory("სხვა")}>
                  <svg
                    className="mb-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="14"
                    height="14"
                  >
                    <circle cx="6" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="18" cy="12" r="2" />
                  </svg>
                  სხვა
                </li>
              </ul>
            </div>
          </div>

          <div>
            <br />
          </div>

          <div className="sellingItemContainer">
            <div className="flex flex-row items-center">
              <h1 className="ml-5">გასაყიდი ტექნიკა</h1>
              <div className="flex flex-col ml-auto relative ">
                <button
                  onClick={handleSortingClick}
                  className="flex flex-row filterBttn items-center bg-white rounded-lg "
                >
                  <span>{chosenFilter}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: `rotate(90deg)` }}
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 7 15"
                    class="ml-auto"
                  >
                    <path
                      stroke="#292D32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.35"
                      d="m.712 1.56 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"
                    ></path>
                  </svg>
                </button>

                {isOpenSort && (
                  <>
                    <div
                      className="isOpenSortListContainer items-center left-1/2 -translate-x-1/2 top-full mt-2 
          bg-white rounded-lg shadow-lg  animate-dropdown"
                    >
                      <ol className="">
                        <li
                          onClick={() => {
                            setChosenFilter("ყველა");
                            setIsOpenSort(false);
                          }}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          ყველა
                        </li>
                        <hr className="horizontalLineInDivBott" />
                        <li
                          onClick={() => {
                            setChosenFilter("ფასის ზრდით");
                            setIsOpenSort(false);
                          }}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          ფასის ზრდით
                        </li>
                        <hr className="horizontalLineInDivBott" />
                        <li
                          onClick={() => {
                            setChosenFilter("ფასის კლებით");
                            setIsOpenSort(false);
                          }}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          ფასის კლებით{" "}
                        </li>
                        <hr className="horizontalLineInDivBott" />
                        <li
                          onClick={() => {
                            setChosenFilter("ა - ჰ");
                            setIsOpenSort(false);
                          }}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          ა - ჰ
                        </li>
                        <hr className="horizontalLineInDivBott" />
                        <li
                          onClick={() => {
                            setChosenFilter("ჰ - ა");
                            setIsOpenSort(false);
                          }}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          ჰ - ა
                        </li>
                      </ol>
                    </div>
                  </>
                )}
              </div>
            </div>
            <br />
            <div className="grid grid-cols-4 gap-10 p-4">
              {sortedList.slice(0, visibleCount).map((item, index) => (
                <div
                  key={item.id}
                  className="itemContainer flex flex-col items-center"
                >
                  <Link to={`/item/${item.id}`} state={{ item }}>
                    <img
                      src={item.url}
                      alt={item.brand + "" + item.model}
                      className="w-32 h-32 object-cover mt-2 rounded pt-2"
                    />
                  </Link>
                  <br />
                  <Link
                    to={`/item/${item.id}`}
                    state={{ item }}
                    className="font-bold text-center self-start pl-[22.5px]"
                  >
                    <h3>{item.brand + "" + item.model}</h3>
                  </Link>
                  <p className="text-sm text-gray-500 self-start pl-[22.5px]">
                    {item.type}
                  </p>
                  <p className="text-[17px] text-green-700  font-bold self-start pl-[22.5px] mt-[12px]">
                    {item.priceSale}₾{" "}
                    <span className="text-[14px] text-semibold line-through text-gray-400 ml-1">
                      {item.priceBefore}₾
                    </span>
                  </p>
                  <div className="flex buttonInItemsContainer gap-4 justify-end my-2">
                    <Link
                      to="tel:+995555283839"
                      className="flex justify-center buttonInItemsBuyCall"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="17"
                        height="17"
                        className=""
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5c0-1.1.9-2 2-2h2.2c.4 0 .8.2 1 .6l1.7 3.4c.2.4.1.9-.2 1.2l-1.3 1.3a16 16 0 006.8 6.8l1.3-1.3c.3-.3.8-.4 1.2-.2l3.4 1.7c.4.2.6.6.6 1V19c0 1.1-.9 2-2 2h-1C9.7 21 3 14.3 3 6V5z"
                        />
                      </svg>
                    </Link>
                    <Link
                      to={`/item/${item.id}`}
                      state={{ item }}
                      className="buttonInItemsBuy"
                    >
                      ყიდვა
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {visibleCount < list.length && (
              <div className="flex justify-center mt-4">
                <button onClick={handleShowMore} className="buttonInItems">
                  მეტის ნახვა
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
