import icloundPhoto from "../assets/images/Icloud.jpeg"
import { useNavigate } from "react-router-dom";


export default function MainPageIclouldInfo() {

  const navigate = useNavigate();





  
  return (
    
    <div className="flex flex-col-reverse md:flex-row mt-40 items-center gap-7 containFlex-1s">
    <div className="flex-1"> 
        
        
        
        <h2> დატოვე აიქლაუდი მომგებიან ფასად </h2>
        <br></br>
        <p className="text-[#545e61]"> ჩვენ ტექნიკის სახლში შენ შეძლებ აიქლაუდის დატოვების  <br/>
             სანაცვლოდ აიღო შენსთვის სასურველი თახნა მომგებიან პირობებში </p>
        <br></br>
        <button onClick={() => navigate("/rules#pawningIcloud")} class="button">პირობების ნახვა</button>

     </div>
    
    
    
    <div className="flex-1 almostCubeImageContainer "><img className="almostCubeImg" src={icloundPhoto} alt="Icloud Photo" /></div>





    </div>

  );}

