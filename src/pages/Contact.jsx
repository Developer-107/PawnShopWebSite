import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import InvitationItem from "../assets/images/openSign.jpg"
import QRCodeAddress from "../assets/images/Qr.png"


export default function Contact() {


  const { pathname, hash } = useLocation();

useEffect(() => {
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - 80; // navbar offset
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  }
}, [pathname, hash]);




  
  return (
    <>
    <div id='contact' className="flex justify-center whiteWholeBG ">
    <div className="mt-[5rem]  contentContainer">
     
        <div id="contactUs" className="flex flex-col items-center">
            <div className="mr-auto"><p style={{fontSize: "30px", fontWeight: "550"}} className="mb-[3rem]">დაგვიკავშირდი</p></div>
            <br/>

            <div className="flex flex-row justify-between justify-center gap-4" style={{width: "100%"}}>
                    <Link to="https://maps.app.goo.gl/pmftPPBSybyrtbwA7?g_st=ipc" target="_blank" rel="noopener noreferrer" className="flex flex-col PercentCubeImageContainer flex-shrink-0 mr-auto" >
                        <div className="flex justify-center items-center percentIconContainer">
                            <h4 className="percentNum">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28" className="mr-1 mt-[1px]">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M12 11a3 3 0 100-6 3 3 0 000 6z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"/>
                                    </svg>
                            </h4>
                        </div>
                        <br/>
                       
                        <h2 className="boxHeading mt-[3px]">ხიზანიშვილის 30, თბილისი</h2>
                        <br/>
                        <p className="boxText"> გვესტუმრე 24 საათის განმავლობაში, კვირაში 7 დღე </p>
                        </Link>


                    <Link to="tel:+995555283839" className="flex flex-col PercentCubeImageContainer flex-shrink-0" >
                        <div className="flex justify-center items-center percentIconContainer">
                            <h4 className="percentNum">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28" className="mr-1 mt-[1px]">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
    d="M3 5c0-1.1.9-2 2-2h2.2c.4 0 .8.2 1 .6l1.7 3.4c.2.4.1.9-.2 1.2l-1.3 1.3a16 16 0 006.8 6.8l1.3-1.3c.3-.3.8-.4 1.2-.2l3.4 1.7c.4.2.6.6.6 1V19c0 1.1-.9 2-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
</svg>
                            </h4>
                        </div>
                        <br/>
                        <h2 className="boxHeading mt-[3px]">(+995) 555 28 38 39</h2>
                        <br/>
                        <p className="boxText">დაგვირეკე 24 საათის განმავლობაში, კვირაში 7 დღე </p>
                        </Link>
                

                    <Link to="mailto:infocshe@gmail.com" className="flex flex-col PercentCubeImageContainer flex-shrink-0 ml-auto" >
                        <div className="flex justify-center items-center percentIconContainer">
                            <h4 className="percentNum">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28" className="mr-1 mt-[1px]">
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" stroke-width="2" stroke="currentColor" fill="none"/>
            <path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


                            </h4>
                        </div>
                        <br/>
                        <h2 className="boxHeading mt-[3px]">infocshe@gmail.com</h2>
                        <br/>
                        <p className="boxText">მოგვწერე 24 საათის განმავლობაში, კვირაში 7 დღე </p>
                        </Link>
            </div>
        </div>
 
 <div className="flex mt-[5rem] justify-center">
    <hr className="horizontalLineInDiv" />
</div>

        <div id="onGoogleMaps" className="mt-[5rem]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.6163703981365!2d44.816327!3d41.793480699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446c48575cb083%3A0x97e16635142c0d4b!2zMzAg4YOd4YOb4YOQ4YOgIOGDruGDmOGDluGDkOGDnOGDmOGDqOGDleGDmOGDmuGDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmCAwMTY3!5e0!3m2!1ska!2sge!4v1758023925082!5m2!1ska!2sge" 
        width="100%" height="600" style={{ border: 0, borderRadius: "10px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
    </div>
    </div>

  </>

  );}
 