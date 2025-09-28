import { Link } from "react-router-dom"
import GrayLogo from "../assets/images/logo/Cash_EE-Logo_Gray.svg"


export default function Footer (){
return(<>

<br/>

<div className="flex upFooter justify-center pt-[48px] mt-35 pb-[32px]  ">
<div className="flex flex-col contentContainer">
<div className="flex flex-col md:flex-row justify-between">
    <div className="flex flex-col">
        <Link to="/rules#services" className="flex flex-row items-center footerBoxHeading">მომსახურებები <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="14" fill="none" stroke="#141719" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="arrow-icon ml-auto flex md:hidden"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
        <br className="md:flex hidden"/>
        <Link to="/rules#pawningIcloud" className="boxText md:flex hidden">აიქლაუდის დატოვება</Link>
        <br className="md:flex hidden"/>
        <Link to="/rules#pawningItem" className="boxText md:flex hidden">ნივთის დატოვება</Link>
        <br className="md:flex hidden"/>
        <Link to="/rules#sellingItem" className="boxText md:flex hidden">ნივთის გაყიდვა</Link>
        <br />
        <Link to="/rules#buyingItems" className="boxText md:flex hidden">ნივთის ყიდვა</Link>
    </div>

    <div className="flex flex-col">
        <Link to="/rules#advantages" className="flex flex-row items-center footerBoxHeading">უპირატესობები <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="14" fill="none" stroke="#141719" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="arrow-icon ml-auto flex md:hidden"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
        <br className="md:flex hidden"/>
        <Link to="/rules#pricing" className="boxText md:flex hidden">უმაღლესი შეფასება</Link>
        <br className="md:flex hidden"/>
        <Link to="/rules#wOutFine" className="boxText md:flex hidden">გადახდა ჯარიმის გარეშე</Link>
        <br/>
        <Link to="/rules#freeSchedule" className="boxText md:flex hidden">თავისუფალი გრაფიკი</Link>
        
    </div>

     <div className="flex flex-col">
        <Link to="/about"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-row footerBoxHeading">ჩვენ შესახებ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="14" fill="none" stroke="#141719" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="arrow-icon ml-auto flex md:hidden"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
        <br className="md:flex hidden"/>
        <Link to="/about#whoWeAre" className="boxText md:flex hidden">ვინ ვართ ჩვენ</Link>
        <br className="md:flex hidden"/>
        <Link to="/about#ourMission" className="boxText md:flex hidden">ჩვენი მისია</Link>
        <br />
        <Link to="/about#ourPriorities" className="boxText md:flex hidden">ჩვენი პრიორიტეტები</Link>
        <br/>
        <Link to="/about#ourExperience" className="boxText md:flex hidden">ჩვენი გამოცდილება</Link>
    </div>

    <div className="flex flex-col">
        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="footerBoxHeading">დაგვიკავშირდი</Link>
        <br/>
        <Link to="tel:+995555283839" className="boxText flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14" className="mr-1 mt-[1px]">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
    d="M3 5c0-1.1.9-2 2-2h2.2c.4 0 .8.2 1 .6l1.7 3.4c.2.4.1.9-.2 1.2l-1.3 1.3a16 16 0 006.8 6.8l1.3-1.3c.3-.3.8-.4 1.2-.2l3.4 1.7c.4.2.6.6.6 1V19c0 1.1-.9 2-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
</svg>
+995 555 28 38 39</Link>
        <br/>
        <Link to="https://maps.app.goo.gl/pmftPPBSybyrtbwA7?g_st=ipc" target="_blank" 
            rel="noopener noreferrer" className="boxText flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14" className="mr-1 mt-[1px]">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 11a3 3 0 100-6 3 3 0 000 6z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"/>
                    </svg>
ხიზანიშვილის 30, თბილისი</Link>
        <br/>
        <Link to="mailto:infocshe@gmail.com" className="boxText flex flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14" className="mr-1 mt-[1px]">
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" stroke-width="2" stroke="currentColor" fill="none"/>
            <path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        infocshe@gmail.com</Link>

    </div>
</div>


<div className="flex flex-col contentContainer justify-center md:mt-35 mt-5">
<hr className="horizontalLineInDivBott my-5" />
<div className="flex flex-row justify-start  gap-4">
<Link to="https://www.facebook.com/techhousecashee/" target="_blank" 
            rel="noopener noreferrer" className="flex iconDiv mt-3 md:mb-5 mb-2 justify-center items-center">
    <svg fill="#6e777a" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon iconLogo">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path> </g>
    </svg>

</Link>
<Link to="https://www.instagram.com/techhousecashee/" target="_blank" 
            rel="noopener noreferrer" className="flex iconDiv mt-3 md:mb-5 mb-2 justify-center items-center">
    <svg fill="#6e777a" width="17.9px" height="17.9px" className="icon iconLogo" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#6e777a" stroke-width="0.096"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>

</Link>
<Link to="https://wa.me/995555283839" target="_blank" 
            rel="noopener noreferrer" className="flex iconDiv mt-3 md:mb-5 mb-2 justify-center items-center">
              <svg fill="#6e777a" height="14px" width="14px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>  
</Link>



</div>
</div>




</div>
</div>





<footer className="flex justify-center" >
<div className="flex flex-row items-center contentContainer py-[16px] gap-3">

<img src={GrayLogo} alt="Cash EE Logo" style={{width:"25px"}}></img><p style={{color: "#6f787b", fontSize: "12px"}}> 
     ტექნიკის სახლი Cash EE {(new Date().getFullYear())} -  უფლებები დაცულია</p>







</div>
</footer>
</>
)
}