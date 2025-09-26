import { Link } from "react-router-dom";
import leaveItem from "../assets/images/Pawning-the-item.png"
import sellItem from "../assets/images/sell.jpg"
import buyItem from "../assets/images/buy.jpg"


export default function MainPageOtherServices() {






  
  return (
    
    <div className="flex flex-col mt-40 items-center">
    <div className="mr-auto xl:text-[22.5px] text-[17.9px]"><p className="font-bold ">სხვა მომსახურებები</p></div>
    <br/>

    <div className="flex w-[100%] lg:flex-row flex-col lg:gap-0 gap-[22px]">

   
    <Link to="/rules#pawningItem" className="relative block lg:mr-auto overflow-hidden rounded-lg leaveItemContainer group">
  <img
    src={leaveItem}
    alt="Leave item Photo"
    className="leaveItem w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
  />
  <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
    ნივთის დატოვება
  </div>
</Link>
    

    <div >
    <Link to="/rules#buyingItems" className="similarImgsContainer block">
        <img className="buyItem" src={buyItem} alt="Buy item Photo" />
        <div className="textOnSimilarContainer textOnDiv">ნივთის ყიდვა</div>

        </Link>
    <br/>
    <Link to="/rules#sellingItem" className="similarImgsContainer block">
        <img className="sellItem" src={sellItem} alt="Sell item Photo" />
        <div className="textOnSimilarContainer textOnDiv">ნივთის გაყიდვა</div>
        </Link>
    </div>
    </div>
    </div>

    
  );}