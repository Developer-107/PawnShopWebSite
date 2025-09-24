import InvitationItem from "../assets/images/openSign.jpg"
import QRCodeAddress from "../assets/images/Qr.png"


export default function MainPageInvitationDiv() {
return(

<>
<br/>

<div className="flex mt-14 justify-center">
    <hr className="horizontalLineInDiv" />
</div>


<div className="flex justify-center items-center invitationContainer mt-25">
        
        <div className="flex flex-col md:flex-row textOnInvitationContainer textOnInvitationDiv items-center justify-center">მომსახურება 24/7-ზე 
            <div className="invitationContainersContainer containerPositioner p-5 xl:ml-[325px] lg:ml-[250px] md:ml-[140px] md:ml-[50px] ml-0 md:mt-0 mt-4">
                <div className="flex gap-12 items-center">
                <div className="py-1 " style={{width: "50%"}}>
                <p  className="font-[700] md:text-[12px] sm:text-[10.4px] text-[10px] text-black md:mb-3 mb-2 mt-[2.5px]" style={{width: "140px"}}>დაასკანერე QR კოდი</p>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="27" viewBox="0 0 240 60" role="img" aria-label="Find us on Google Maps">
                <text x="42" y="22" font-family="Arial, sans-serif"
                        font-size="12" font-weight="400" fill="#878787">Find us on</text>
                <path d="M18 9C11.716 9 6.5 14.216 6.5 20.5 6.5 29.45 18 45 18 45s11.5-15.55 11.5-24.5C29.5 14.216 24.284 9 18 9z"
                        fill="#878787"/>
                <circle cx="18" cy="20.5" r="4.5" fill="white"/>
                <text x="42" y="42" font-family="Arial, sans-serif"
                        font-size="16" font-weight="600" fill="#878787">Google Maps</text>
                </svg>
                </div>
                <img className="ml-auto mt-[2.5px] w-16 md:w-[64px] h-auto" src={QRCodeAddress} alt="Qr Code of Address"/>

            </div>
        </div>

        </div>
        </div>











</>)

}