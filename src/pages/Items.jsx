import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Items() {


  const { pathname, hash } = useLocation();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(49999);
    const minLimit = 0;
  const maxLimit = 50000;

  


  

  

const [chosenFilter, setChosenFilter] = useState("ყველა")



const list = [
  { id:1, type: "ტელევიზორი", brand: "Samsung ", model:"G10i", state: "უხმარი", priceSale: 1000, priceBefore: 1400, url: "https://news.samsung.com/my/wp-content/uploads/2024/01/20240104_01_01.jpg" },
  { id:2,type: "ტელევიზორი", brand: "LG ", model:"OLED C1", state: "უხმარი", priceSale: 2000, priceBefore: 2500, url: "https://www.lg.com/us/images/tvs/md07506472/gallery/desktop-01.jpg" },
  { id:3,type: "ტელეფონი", brand: "iPhone ",  model:"14", state: "უხმარი", priceSale: 1400, priceBefore: 1700, url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-purple-select-2022" },
  { id:4,type: "ტელეფონი", brand: "Samsung Galaxy" , model:" S23", state: "უხმარი", priceSale: 1300, priceBefore: 1600, url: "https://images.samsung.com/is/image/samsung/p6pim/levant/sm-s911ezwdmea/gallery/levant-galaxy-s23-s911-445380-sm-s911ezwdmea-530490551?$650_519_PNG$" },
  { id:5,type: "ლეპტოპი", brand: "Dell" , model:" XPS 15", state: "უხმარი", priceSale: 2200, priceBefore: 2500, url: "https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/xps-15-9530-laptop.jpg" },
  { id:6,type: "ლეპტოპი", brand: "MacBook " , model:"Pro 16", state: "უხმარი", priceSale: 3500, priceBefore: 4000, url: "https://www.apple.com/v/macbook-pro-16/h/images/overview/hero/hero_endframe__bsza6x4fldiq_large.jpg" },
  { id:7,type: "ყურსასმენი", brand: "Sony" , model:" WH-1000XM5", state: "უხმარი", priceSale: 800, priceBefore: 1000, url: "https://imgstore.alta.ge/images/400/145/145736_4792_2.webp" },


    { id:8,type: "ყურსასმენი", brand: "Sony " , model:"WH-1000XM5", state: "უხმარი", priceSale: 800, priceBefore: 1000, url: "https://www.sony.com/image/wh1000xm5-b.jpg" },
];

const filteredList = list.filter(item => 
  item.priceSale >= min && item.priceSale <= max);

const sortedList = [...filteredList].sort((a, b) => {
  switch(chosenFilter) {
    case "ფასის ზრდით":
      return a.priceSale - b.priceSale;
    case "ფასის კლებით":
      return b.priceSale - a.priceSale;
    case "ა - ჰ":
      return a.title.localeCompare(b.title);
    case "ჰ - ა":
      return b.title.localeCompare(a.title);
    default:
      return 0;
  }
});


  const [visibleCount, setVisibleCount] = useState(12); // show 12 items initially

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12); // show 12 more items each click
  };










  
  const [isOpenSort, setIsOpenSort] = useState(false)



  const handleSortingClick = () => {
      setIsOpenSort(!isOpenSort)
  }

useEffect(() => {
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - 80; // navbar offset
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  }
}, [pathname, hash]);




  
  return (
    <>
    <div id='items' className="flex justify-center">
    <div className="flex flex-row mt-[5rem] contentContainer">
    
    
    
    <div className="flex flex-col items-center mr-auto">
        <div className="flex flex-row mr-auto justify-between items-center gap-[75.7px] pt-[5px]">
    <h2 className="mr-auto">ფილტრი</h2>
    <div onClick={() => window.location.href = "/items"} className="cleanButtn cursor-pointer"> გასუფთავება </div> 
</div> 
    <br/>
    <div className="filterDiv">
        <h3>ფასი</h3>


         <br/>
        {/* Slider container */}
      <div className="relative h-2 mb-6">
        {/* Track background */}
        <div className="absolute w-full h-2 bg-[#a5c2e6] rounded"></div>
        {/* Selected range */}
        <div
          className="absolute h-2 bg-[#2f62a1] rounded"
          style={{
            left: `${(min / maxLimit) * 100}%`,
            right: `${100 - (max / maxLimit) * 100}%`
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
            <span className="absolute left-22 top-1/2 -translate-y-1/2 text-gray-600">₾</span>
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
            <span className="absolute left-22 top-1/2 -translate-y-1/2 text-gray-600">₾</span>
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
    </div>
    
    <div>
    <br/>
    </div>










<div className="sellingItemContainer">
    <div className="flex flex-row items-center">
<h1 className="ml-5">გასაყიდი ტექნიკა</h1>
<div className="flex flex-col ml-auto relative ">

    <button onClick={handleSortingClick} className="flex flex-row filterBttn items-center bg-white rounded-lg "> 
        <span>{chosenFilter}</span>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(90deg)` }} width="1em" height="1em" fill="none" viewBox="0 0 7 15" class="ml-auto">
        <path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.35" d="m.712 1.56 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89">
            </path></svg>
        </button>
                
    {isOpenSort && (<>
   
    <div className="isOpenSortListContainer items-center left-1/2 -translate-x-1/2 top-full mt-2 
          bg-white rounded-lg shadow-lg  animate-dropdown">
        
        
        <ol className="">
            <li onClick= {()=>{setChosenFilter("ყველა"); setIsOpenSort(false)}} className="p-2 hover:bg-gray-100 cursor-pointer">ყველა</li>
            <hr className="horizontalLineInDivBott"/>
            <li onClick= {()=>{setChosenFilter("ფასის ზრდით"); setIsOpenSort(false)}} className="p-2 hover:bg-gray-100 cursor-pointer">ფასის ზრდით</li>
            <hr className="horizontalLineInDivBott"/>
            <li onClick= {()=>{setChosenFilter("ფასის კლებით"); setIsOpenSort(false)}} className="p-2 hover:bg-gray-100 cursor-pointer">ფასის კლებით </li>
            <hr className="horizontalLineInDivBott"/>
            <li onClick= {()=>{setChosenFilter("ა - ჰ"); setIsOpenSort(false)}} className="p-2 hover:bg-gray-100 cursor-pointer">ა - ჰ</li>
            <hr className="horizontalLineInDivBott"/>
            <li onClick= {()=>{setChosenFilter("ჰ - ა"); setIsOpenSort(false)}} className="p-2 hover:bg-gray-100 cursor-pointer">ჰ - ა</li>
        </ol>

    </div>
    
    
    
    </>)}

</div>
</div>
    <br/>
    <div className="grid grid-cols-4 gap-10 p-4">
  {sortedList.slice(0, visibleCount).map((item, index) => (
    <div key={item.id} className="itemContainer flex flex-col items-center">
      <Link to={`/item/${item.id}`}
            state={{ item }}><img src={item.url} alt={item.brand + "" + item.model} className="w-32 h-32 object-cover mt-2 rounded pt-2"/></Link> 
      <br/>
      <Link to={`/item/${item.id}`}
            state={{ item }}  className="font-bold text-center self-start pl-[22.5px]"><h3>{item.brand + "" + item.model}</h3></Link>
      <p className="text-sm text-gray-500 self-start pl-[22.5px]">{item.type}</p>
      <p className="text-[17px] text-green-700  font-bold self-start pl-[22.5px] mt-[12px]">{item.priceSale}₾ <span className="text-[14px] text-semibold line-through text-gray-400 ml-1">{item.priceBefore}₾</span></p>
      <div className="flex buttonInItemsContainer gap-4 justify-end my-2">
            <Link
            to="tel:+995555283839"
            className="flex justify-center buttonInItemsBuyCall"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="17" height="17" className="">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M3 5c0-1.1.9-2 2-2h2.2c.4 0 .8.2 1 .6l1.7 3.4c.2.4.1.9-.2 1.2l-1.3 1.3a16 16 0 006.8 6.8l1.3-1.3c.3-.3.8-.4 1.2-.2l3.4 1.7c.4.2.6.6.6 1V19c0 1.1-.9 2-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
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
          <button
            onClick={handleShowMore}
            className="buttonInItems"
          >
            მეტის ნახვა
          </button>
        </div>
      )}
</div>












    </div>
    </div>

  </>

  );}
 


