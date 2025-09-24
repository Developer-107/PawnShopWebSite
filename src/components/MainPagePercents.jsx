import { Link } from "react-router-dom"
import HorizontalScroll from "./HorizontalScroll";





export default function MainPagePercents(){
    return (<>

        <div className="flex flex-col mt-40 items-center">
            <div className="mr-auto"><p  className="font-bold xl:text-[22.5px] text-[17.9px]">ჩვენი უპირატესობები</p></div>
            <br/>

            <div className="flex flex-row justify-between gap-4 w-[100%] custom-scroll" >
                <HorizontalScroll>
                    <Link to="/rules#pricing" className="flex flex-col PercentCubeImageContainer flex-shrink-0 mr-auto" >
                        <div className="flex justify-center items-center percentIconContainer">
                            <h4 className=" percentNum justify-center">
                                
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
  <text x="14" y="17.9" font-size="28" font-weight="550" font-family="Montserrat, sans-serif"fill="currentColor"
        text-anchor="middle" dominant-baseline="middle"
        transform="translate(-1,-1) scale(1,1)">₾</text>
</svg>





                            </h4>
                        </div>
                        <br/>
                        <h2 className="boxHeading mt-[3px]">უმაღლესი შეფასება</h2>
                        <br/>
                        <p className="boxText">დააკლიკე და იხილე მეტი</p>
                        </Link>


                    <Link to="/rules#wOutFine" className="flex flex-col PercentCubeImageContainer flex-shrink-0" >
                        <div className="flex justify-center items-center percentIconContainer">
                            <h4 className="percentNum">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2L4 5v6c0 5 4 10 8 10s8-5 8-10V5l-8-3z"/>
  <polyline points="9,12 11,14 15,10"/>
</svg>

                            </h4>
                        </div>
                        <br/>
                        <h2 className="boxHeading mt-[3px]">გადახდა ჯარიმის გარეშე</h2>
                        <br/>
                        <p className="boxText">დააკლიკე და იხილე მეტი</p>
                        </Link>
                

                    <Link to="/rules#freeSchedule" className="flex flex-col PercentCubeImageContainer flex-shrink-0 ml-auto" >
                        <div className="flex justify-center items-center percentIconContainer">
                            <h4 className="percentNum">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/> 
                                    <line x1="8" y1="2" x2="8" y2="6"/> 
                                    <line x1="16" y1="2" x2="16" y2="6"/> 

                                    
                                    <text x="12" y="16" text-anchor="middle" alignment-baseline="middle" font-size="6" fill="currentColor" font-family="Arial, sans-serif" font-weight="400" stroke-width="1.4">1</text>
                                    </svg>



                            </h4>
                        </div>
                        <br/>
                        <h2 className="boxHeading mt-[3px]">თავისუფალი გრაფიკი</h2>
                        <br/>
                        <p className="boxText">დააკლიკე და იხილე მეტი</p>
                        </Link>
                
                





</HorizontalScroll>


            </div>

        </div>
 
            
    </>);
    }