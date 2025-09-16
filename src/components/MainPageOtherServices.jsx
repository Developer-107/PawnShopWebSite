import { Link } from "react-router-dom";
import leaveItem from "../assets/images/Pawning-the-item.png"
import sellItem from "../assets/images/sell.jpg"
import buyItem from "../assets/images/buy.jpg"


export default function MainPageOtherServices() {






  
  return (
    
    <div className="flex flex-col mt-40 items-center">
    <div className="mr-auto"><p style={{fontSize: "22.5px"}} className="font-bold ">სხვა მომსახურებები</p></div>
    <br/>

    <div className="flex flex-row">

   
    <Link to="/rules#pawningItem" className="mr-auto leaveItemContainer">
        <img className="leaveItem" src={leaveItem} alt="Leave item Photo" />
        <div className="textOnContainer textOnDiv">ნივთის დატოვება</div>
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