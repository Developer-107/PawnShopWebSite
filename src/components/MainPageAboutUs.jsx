import React from "react";
import { Link } from "react-router-dom";
import ArrowSVG from  "../assets/images/arrow.svg"


export default function MainPageAboutUs () {
return(<div>

    <h1 className="mainText"> Cash EE არის ტექნიკის სახლი, რომელიც გიმარტივებს ნივთის <br/> დატოვებას,
         გაყიდვასა თუ მის შეძენას.  </h1>
    <br/>
    <br/>
    <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center text-[#2f62a1] xl:text-[19px] text-[16px] font-bold"> <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"  // IMPORTANT for scaling

      width="25"
      height="20"
      fill="none"
      stroke="#2f62a1"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-icon"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>  <p className="mx-1">ჩვენ შესახებ</p></Link>





</div>)



}