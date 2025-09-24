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
<Link to="facebook.com" className="flex iconDiv mt-3 md:mb-5 mb-2 justify-center items-center">
    <svg fill="#6e777a" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="icon iconLogo">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path> </g>
    </svg>

</Link>
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