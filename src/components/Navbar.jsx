import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/logo/Cash_EE-Logo.svg"



export default function Navbar({className}) {
  
  const navbarRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const navbar = navbarRef.current;
    const navHeight = navbar.offsetHeight;

    // Start at normal position
    navbar.style.top = "0px";

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > (lastScrollTop)) {
        // Scrolling down → hide navbar
        
        
        navbar.classList.remove("scrolled-up");
        navbar.classList.add("hidden");


      } else if (lastScrollTop > currentScroll) {
        // Scrolling up → show navbar ONLY if not at very top
        if (currentScroll > 10) {
          navbar.classList.add("scrolled-up");
          navbar.classList.remove("hidden");

        } else {
          // At very top → normal starting position
          navbar.classList.remove("scrolled-up");
          navbar.classList.remove("hidden");
        }
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);




    return(<>   
      <nav ref={navbarRef} id="navbar" className="navbar fixed top-0 left-0 w-full z-1000 transition-transform duration-300 ease-in-out flex justify-center">
        <div className="flex w-full mx-59 items-center">
          
          <div className="flex mr-auto items-center">
          <div className="flex items-center logoDiv"><Link id="logo" className="flex items-center" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src={Logo}/></Link></div>
          <Link className="flex items-center m-5 ml-16" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>მთავარი</Link>
          <Link className="flex items-center m-5" to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>ჩვენს შესახებ</Link>
          <Link className="flex items-center m-5 text-[#2f62a1] font-semibold" to="/items" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>გასაყიდი ნივთები</Link>
          <Link className="flex items-center m-5" to="/rules" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>პირობები</Link>
          </div>
          <Link className="flex items-center my-5 mx-2" to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>კონტაქტი </Link>
        </div>
      </nav>
    </>)

}
