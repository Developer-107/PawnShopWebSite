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

  const [isFilterOpen, setFilterOpen] = useState(false);

  const[list, setList] = useState([])   

    useEffect(() => {
  fetch(`/api/items`)
    .then((res) => res.json())
    .then((data) => {
      setList(data.list || []);
    });
}, []);

const productList = [
  { id: 1, brand: "Samsung", model: "G10i", state: "უხმარი", pricesale: 1000, pricebefore: 1400, url: "https://mobilebazar.com.bd/assets/img/Samsung-Galaxy-S24.webp", type: "მობილური" },
  { id: 2, brand: "LG", model: "OLED C1", state: "უხმარი", pricesale: 2000, pricebefore: 2500, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCLMqp7pz0tLjKm2tCeJOeJ2EJ5Y5kkmf2w&s", type: "ტელევიზორი" },
  { id: 3, brand: "iPhone", model: "14", state: "უხმარი", pricesale: 1400, pricebefore: 1700, url: "https://m.media-amazon.com/images/I/619f09kK7tL.jpg", type: "მობილური" },
  { id: 4, brand: "Samsung Galaxy", model: "S23", state: "უხმარი", pricesale: 1300, pricebefore: 1600, url: "https://usmobi.ge/wp-content/uploads/2024/06/s23.png", type: "მობილური" },
  { id: 5, brand: "Dell", model: "XPS 15", state: "უხმარი", pricesale: 2200, pricebefore: 2500, url: "https://cdn.allmarket.ge/2405/51/31/83/59eab7e814a64a47881c919da742c4d3/74169-588149.jpg", type: "ლეპტოპი" },
  { id: 6, brand: "MacBook", model: "Pro 16", state: "უხმარი", pricesale: 3500, pricebefore: 4000, url: "https://top-cyprus.cy/image/cache/catalog/1MacbookPro16m3Pro/Macbook_Pro_16_m3_pro_space_black_buy_cyprus-1000x1000.jpg", type: "ლეპტოპი" },
  { id: 7, brand: "Sony", model: "WH-1000XM5", state: "უხმარი", pricesale: 800, pricebefore: 1000, url: "https://helpguide.sony.net/mdr/wh1000xm5/v1/en/contents/image/Top_image_WH-1000XM5.png", type: "ყურსასმენი" },
  { id: 8, brand: "Acer", model: "Aspire 7", state: "უხმარი", pricesale: 1100, pricebefore: 1400, url: "https://m.media-amazon.com/images/I/71a02XjMJnL._UF1000,1000_QL80_.jpg", type: "ლეპტოპი" },
  { id: 9, brand: "MSI", model: "Katana GF66", state: "უხმარი", pricesale: 1500, pricebefore: 1800, url: "https://cdn.allmarket.ge/2405/61/86/80/d3dcda6fd3004a3c963cccbae496df8a/84849-687928.jpg", type: "ლეპტოპი" },
  { id: 10, brand: "OnePlus", model: "11 5G", state: "უხმარი", pricesale: 900, pricebefore: 1200, url: "https://megga.ge/files/products/ciIbAV6S6SPTSmy6BoawPP9Mgrfebe.jpg", type: "მობილური" },
  { id: 11, brand: "Realme", model: "GT Neo 5", state: "უხმარი", pricesale: 750, pricebefore: 1000, url: "https://ae01.alicdn.com/kf/Sda2fad95fb9249b7a2cd4b6a58e4cb4eI.png", type: "მობილური" },
  { id: 12, brand: "Panasonic", model: "Lumix GH6", state: "უხმარი", pricesale: 2200, pricebefore: 2600, url: "https://m.media-amazon.com/images/I/81WeGNHq6UL._UF894,1000_QL80_.jpg", type: "სხვა" },
  { id: 13, brand: "Fujifilm", model: "X-T5", state: "უხმარი", pricesale: 1800, pricebefore: 2200, url: "https://i0.wp.com/fujifilmxindia.com/wp-content/uploads/2025/02/X-T5_front_CMOS_black-1-scaled.jpg?fit=2560%2C2560&ssl=1", type: "სხვა" },
  { id: 14, brand: "JBL", model: "Live 660NC", state: "უხმარი", pricesale: 250, pricebefore: 400, url: "https://m.media-amazon.com/images/I/61cjF3Y4pwL.jpg", type: "ყურსასმენი" },
  { id: 15, brand: "Beats", model: "Studio Pro", state: "უხმარი", pricesale: 300, pricebefore: 500, url: "https://incredideals.co/cdn/shop/files/MQTQ3.png?v=1737698049&width=416", type: "ყურსასმენი" },
  { id: 16, brand: "Nintendo", model: "Switch OLED", state: "უხმარი", pricesale: 350, pricebefore: 500, url: "https://icity.ge/wp-content/uploads/2023/12/Nintendo-Switch-OLED-550x550.webp", type: "კონსოლი" },
  { id: 17, brand: "Valve", model: "Steam Deck 512GB", state: "უხმარი", pricesale: 500, pricebefore: 700, url: "https://s3.zoommer.ge/zoommer-images/thumbs/0188721_steam-deck-console-512gb-black_550.jpeg", type: "კონსოლი" },
  { id: 18, brand: "Philips", model: "55OLED806", state: "უხმარი", pricesale: 1700, pricebefore: 2100, url: "https://imart.ge/images/detailed/161/Untitled-12_tahm-jo.jpg", type: "ტელევიზორი" },
  { id: 19, brand: "TCL", model: "C835 Mini LED", state: "უხმარი", pricesale: 1300, pricebefore: 1600, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1X-qSXgmPs1kvF6fzwis-8OHM5lL3fWVMQw&s", type: "ტელევიზორი" },
  { id: 20, brand: "Razer", model: "Blade 15", state: "უხმარი", pricesale: 2000, pricebefore: 2500, url: "https://tmarket.ge/wp-content/uploads/2023/04/razerblade15-1.webp", type: "ლეპტოპი" },
  { id: 21, brand: "Gigabyte", model: "Aero 16", state: "უხმარი", pricesale: 2100, pricebefore: 2600, url: "https://m.media-amazon.com/images/I/61qIFqcwZyL._UF894,1000_QL80_.jpg", type: "ლეპტოპი" },
  { id: 22, brand: "Motorola", model: "Edge 40 Pro", state: "უხმარი", pricesale: 800, pricebefore: 1050, url: "https://motorolaroe.vtexassets.com/arquivos/ids/157285-800-auto?width=800&height=auto&aspect=true", type: "მობილური" },
  { id: 23, brand: "Iphone", model: "17 Pro Max", state: "უხმარი", pricesale: 12999, pricebefore: 14999, url: "https://icity.ge/wp-content/uploads/2025/07/iPhone-17-Pro-Max-Deep-Blue-1-550x550.webp", type: "მობილური" },
  { id: 24, brand: "DJI", model: "Mini 3 Pro Drone", state: "უხმარი", pricesale: 700, pricebefore: 950, url: "https://coptertech.ge/wp-content/uploads/2022/06/3a4bfa1d1318504e873fb70ff2047703@origin.jpg", type: "სხვა" },
  { id: 25, brand: "GoPro", model: "Hero 11 Black", state: "უხმარი", pricesale: 400, pricebefore: 600, url: "https://megga.ge/files/products/yhHxjDYym3yBSmpzbfjzCk5MqOAaR.jpg", type: "სხვა" },
  { id: 26, brand: "SteelSeries", model: "Nova", state: "უხმარი", pricesale: 350, pricebefore: 500, url: "https://gitec.ge/images/thumbs/0074763_61670_ss_550.png", type: "ყურსასმენი" },
  { id: 27, brand: "Logitech", model: "G Pro X Wireless", state: "უხმარი", pricesale: 250, pricebefore: 400, url: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-wireless/pro-wireless-headset-gallery-1.png?v=1", type: "ყურსასმენი" }
];

useEffect(() => {
    setList(productList);
  }, []);

  const filteredList = list.filter(
    (item) => {
  const inPrice = item.pricesale >= min && item.pricesale <= max;
  const inCategory =
    selectedCategory === "ყველა" || item.type === selectedCategory;
  return inPrice && inCategory;
}
  );

  const sortedList = [...filteredList].sort((a, b) => {
    switch (chosenFilter) {
      case "ფასის ზრდით":
        return a.pricesale - b.pricesale;
      case "ფასის კლებით":
        return b.pricesale - a.pricesale;
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




  const handleFilterClick = () => {
    setFilterOpen(!isFilterOpen);
  };

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
      <div id="items" className="flex flex-col lg:flex-row justify-center lg:px-0 px-[16.1px] md:px-[25px] sm:px-[20px] sm:mt-0 mt-[1rem]">
        <button
                  onClick={handleFilterClick}
                  className="flex flex-row filterBttn items-center bg-white rounded-lg items-center gap-2 !w-[108px] justify-center hover:bg-[#f7f7f7] sm:hidden cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px]" width="14" height="12" fill="none" viewBox="0 0 20 18"><path stroke="#181D27" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.667 2.833c0-.466 0-.7.09-.878a.833.833 0 0 1 .365-.364C2.3 1.5 2.533 1.5 3 1.5h14c.467 0 .7 0 .878.09.157.08.285.208.364.365.091.178.091.412.091.878v.558c0 .224 0 .336-.027.44a.833.833 0 0 1-.118.259c-.06.089-.145.162-.315.309l-5.33 4.619c-.169.147-.253.22-.314.309a.831.831 0 0 0-.118.258c-.028.105-.028.217-.028.44v4.357c0 .163 0 .244-.026.315a.417.417 0 0 1-.11.163c-.056.05-.131.08-.283.141l-2.833 1.133c-.306.123-.46.184-.582.159a.417.417 0 0 1-.263-.178c-.07-.105-.07-.27-.07-.6v-5.49c0-.223 0-.335-.027-.44a.833.833 0 0 0-.118-.258c-.06-.089-.145-.162-.314-.31L2.127 4.4c-.17-.147-.254-.22-.315-.31a.833.833 0 0 1-.118-.258c-.027-.104-.027-.216-.027-.44v-.558Z"></path></svg>
                  <span>ფილტრი</span>
                  
                </button>
        <div className="flex flex-row lg:mt-[5rem] sm:mt-[3rem] mt-[1rem]  contentContainer">
          <div className="hidden lg:flex flex-col items-center mr-auto">
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

          <div className="sellingItemContainer !w-[100%]">
            <div className="flex flex-row items-center">
              <h1 className="lg:ml-5 ml-0">გასაყიდი ტექნიკა</h1>
              <div className="flex flex-row ml-auto relative gap-1">
                <button
                  onClick={handleFilterClick}
                  className="sm:flex flex-row filterBttn items-center bg-white rounded-lg items-center gap-2 !w-[108px] justify-center hover:bg-[#f7f7f7] lg:hidden hidden cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px]" width="14" height="12" fill="none" viewBox="0 0 20 18"><path stroke="#181D27" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.667 2.833c0-.466 0-.7.09-.878a.833.833 0 0 1 .365-.364C2.3 1.5 2.533 1.5 3 1.5h14c.467 0 .7 0 .878.09.157.08.285.208.364.365.091.178.091.412.091.878v.558c0 .224 0 .336-.027.44a.833.833 0 0 1-.118.259c-.06.089-.145.162-.315.309l-5.33 4.619c-.169.147-.253.22-.314.309a.831.831 0 0 0-.118.258c-.028.105-.028.217-.028.44v4.357c0 .163 0 .244-.026.315a.417.417 0 0 1-.11.163c-.056.05-.131.08-.283.141l-2.833 1.133c-.306.123-.46.184-.582.159a.417.417 0 0 1-.263-.178c-.07-.105-.07-.27-.07-.6v-5.49c0-.223 0-.335-.027-.44a.833.833 0 0 0-.118-.258c-.06-.089-.145-.162-.314-.31L2.127 4.4c-.17-.147-.254-.22-.315-.31a.833.833 0 0 1-.118-.258c-.027-.104-.027-.216-.027-.44v-.558Z"></path></svg>
                  <span>ფილტრი</span>
                  
                </button>
                <button
                  onClick={handleSortingClick}
                  className="flex flex-row filterBttn items-center bg-white rounded-lg cursor-pointer"
                >
                  <span>{chosenFilter}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: `rotate(${isOpenSort ? 270 : 90}deg)`,     transition: "transform 0.7s ease-in-out", // duration + easing
 }}
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
          bg-white rounded-lg shadow-lg  animate-dropdown ml-0 sm:ml-[55.5px] lg:ml-0"
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
            <div className="grid [@media(min-width:945px)]:grid-cols-5 (max-width:1024px)]:grid-cols-5 xl:!grid-cols-4 lg:!grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 p-4">
              {sortedList.slice(0, visibleCount).map((item, index) => (
                <div
                  key={item.id}
                  className="itemContainer flex flex-col items-center"
                >
                  <Link to={`/item/${item.id}`} state={{ item }}>
                    <img
                      src={item.url}
                      alt={item.brand + "" + item.model}
                      className="sm:w-32 h-32 object-cover mt-2 rounded pt-2"
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
                  <p className="lg:text-sm text-[10px] text-gray-500 self-start pl-[22.5px]">
                    {item.type}
                  </p>
                  <p className="lg:text-[17px] text-[14px] text-green-700  font-bold self-start pl-[22.5px] lg:mt-[12px]">
                    {item.pricesale}₾{" "}
                    <span className="text-[14px] text-semibold line-through text-gray-400 ml-1">
                      {item.pricebefore}₾
                    </span>
                  </p>
                  <div className="flex buttonInItemsContainer lg:gap-4 gap-2 justify-end my-2">
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
              <div className="flex justify-center mt-4 ">
                <button onClick={handleShowMore} className="buttonInItems md:w-[170px] w-[100%]">
                  მეტის ნახვა
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isFilterOpen && ( <>
        <div className="flex lg:hidden fixed bottom-0 right-0 h-[100%] w-screen bg-black/5 z-9 py-2"></div>
        <div className="flex lg:hidden fixed bottom-0 right-0 h-[70%] w-screen bg-[#ffffff] z-10 py-2 overflow-y-auto no-scrollbar">
            <div className="lg:hidden flex-col items-center w-[100%] px-[19px] pl-5 py-1">
            <div className="flex flex-row mr-auto justify-between items-center gap-2 pt-[5px] !text-[10.7px]">
              <div className="cursor-pointer"><svg onClick={() => setFilterOpen(false)} xmlns="http://www.w3.org/2000/svg" className="ml-1" width="1em" height="1em" fill="none" viewBox="0 0 10 10" class="sc-b65f0884-4 iYrBnu"><path stroke="#344054" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 1 1 9m0-8 8 8"></path></svg></div>
              <h2 className="mr-auto !text-[12.7px]">ფილტრი</h2>
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
                            <div className="flex justify-center w-full">
            <hr className="flex horizontalLineInDivBott !w-[90%] mt-4"/>
            </div>
            <br />
            <div className="filterDiv !w-[100%]">
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
              <div className="flex justify-between justify-start ">
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
            <div className="filterDiv !w-[100%]">
              <h3>კატეგორია</h3>
              <br />
              <ul className="grid md:grid-cols-4 grid-cols-3 gap-3">
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
            <br />
          </div>



        </div>
      </>)}
    </>
  );
}
