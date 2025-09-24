import { useNavigate } from "react-router-dom";
import SellingItem from "../assets/images/SellingItem.jpg";

export default function MainPageSecondInfoDiv() {



  const navigate = useNavigate();


  
  return (
    
    <div className="flex md:flex-row flex-col gap-7 mt-25 items-center containFlex-1s">
    
    
    <div className="flex-1 almostCubeImageContainer flex-shrink-0 !ml-[0px]" ><img className="almostCubeImg"  src={SellingItem} alt="" /></div>

    <div className="flex-1 md:ml-7" > 
        
        
        
        <h2> შეიძინე შენთვის სასურველი ნივთი</h2>
        <br></br>
        <p className="text-[#545e61]"> ჩვენი ვებ გვერდის მეშვეობით შეგიძლია იხილო გვაქვს  <br/>
                                        თუ არა შენთვის სასურველი ნივთი გასაყიდად, <br/>
                                         მიიღო გასაყიდ ნივთების მდგომარეობასა და ფასის შესახებ <br/>ინფორმაცია </p>
        <br></br>
        <button onClick={() => navigate("/items")} class="button">გასაყიდი ნივთების ნახვა</button>

     </div>
    
    
    





    </div>

  );}