import { Link } from "react-router-dom";
import leaveItem from "../assets/images/Pawning-the-item.png"
import sellItem from "../assets/images/sell.jpg"
import buyItem from "../assets/images/buy.jpg"


export default function MainPageOtherServices() {






  
  return (
    
    <div className="flex flex-col mt-40 items-center">
    <div className="mr-auto xl:text-[22.5px] md:text-[17.9px] text-[16.1px]"><p className="font-bold ">სხვა მომსახურებები</p></div>
    <br/>

    <div className="flex w-[100%] lg:flex-row flex-col lg:gap-0 sm:gap-[22px] gap-[14px]">

   
    <Link to="/rules#pawningItem" className="relative block lg:mr-auto overflow-hidden rounded-lg leaveItemContainer group w-[100%] threeScreenSizeDiv">
  <img
    src={leaveItem}
    alt="Leave item Photo"
    className="leaveItem w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-107"
  />
  <div className="absolute bottom-4 left-4 text-[#f2f2f2] xl:text-[17.8px] md:text-[16.7px] font-semibold text-lg z-10">
    ნივთის დატოვება
  </div>
</Link>
    

    <div className="flex flex-col sm:gap-[22px] gap-[14px] w-[100%] sm:h-full">
    <Link to="/rules#buyingItems" className="relative block lg:mr-auto overflow-hidden rounded-lg leaveItemContainer group h-full lg:!h-[230px] w-[100%] threeScreenSizeDiv">
        <img className="leaveItem w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-107" 
        src={buyItem} alt="Buy item Photo" />
        <div className="absolute bottom-4 left-4 text-[#f2f2f2] xl:text-[17.8px] md:text-[16.7px] font-semibold text-lg z-10">ნივთის ყიდვა</div>

        </Link>
    
    <Link to="/rules#sellingItem" className="relative block lg:mr-auto overflow-hidden rounded-lg leaveItemContainer group h-full lg:!h-[230px] w-full threeScreenSizeDiv">
        <img className="leaveItem w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-107" 
        src={sellItem} alt="Sell item Photo" />
        <div className="absolute bottom-4 left-4 text-[] text-[#f2f2f2] xl:text-[17.8px] md:text-[16.7px] font-semibold text-lg z-10">ნივთის გაყიდვა</div>
        </Link>
    </div>
    </div>
    </div>

    
  );}