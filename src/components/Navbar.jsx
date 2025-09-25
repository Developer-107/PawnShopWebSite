import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/logo/Cash_EE-Logo.svg"



export default function Navbar({className}) {
  
  const navbarRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        setScrolledUp(false);
        navbar.classList.add("hidden");


      } else if (lastScrollTop > currentScroll) {
        // Scrolling up → show navbar ONLY if not at very top
        if (currentScroll > 10) {
          navbar.classList.add("scrolled-up");
          setScrolledUp(true);
          navbar.classList.remove("hidden");

        } else {
          // At very top → normal starting position
          navbar.classList.remove("scrolled-up");
          setScrolledUp(false);
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
        <div className="flex w-full contentContainer items-center">
          
          
          <div className="flex items-center logoDiv"><Link id="logo" className="flex items-center" to="/" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false)}}><img src={Logo}/></Link></div>

          
          
          <div className="md:hidden ml-auto flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none hover:bg-gray-100 active:bg-gray-200 p-2 mx-[-0.5rem] rounded-md cursor-pointer">
            <svg
      className="w-8 h-8 text-gray-500"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top line */}
      <line
        x1="14"
        y1="7"
        y2="7"
        x2="24"
        style={{ transformOrigin: "25.10px 17px" }}
        className={`transition-all duration-300${
          isOpen ? " scale-x-128 -rotate-45" : ""
        }`}
      />
      {/* Middle line */}
      <line
        x1="9"
        y1="14"
        y2="14"
        x2="24"
       
        className={`transition-all duration-300 origin-center ${isOpen ? "scale-x-102 -rotate-45 " : ""}`}
      />
      {/* Bottom line */}
      <line
        x1="4"
        y1="21"
        y2="21"
        x2="24"
        style={{ transformOrigin: "19px 20px" }}
        className={`transition-all duration-300  ${
          isOpen ? " -translate-y-[3.5px] scale-x-100 rotate-45" : ""
        }`}
      />
    </svg>
          </button>
        </div>
        {isOpen && (
          <div className={`flex flex-col md:hidden absolute top-full right-0 sm:w-[35%] w-[55%] h-screen shadow-md justify-start items-end ${scrolledUp ? "bg-white/95 backdrop-blur-md" : "bg-[#fafafa]"
  }`}>
            
          
          <hr className="horizontalLineInDiv mb-3 self-center" style={{width: "82.7%"}}/>
          <Link className="flex md:text-[17px] text-[14px] font-semibold text-gray-500 m-5 mx-10" to="/" onClick={() =>{ window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false);}}>მთავარი</Link>
          <Link className="flex items-center md:text-[17px] text-[14px] font-semibold text-gray-500 m-5 mx-10" to="/about" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false);}}>ჩვენს შესახებ</Link>
          <Link className="flex items-center m-5 mx-10 md:text-[17px] text-[14px] font-bold text-[#2f62a1] font-bold" to="/items" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false);}}>გასაყიდი ნივთები</Link>
          <Link className="flex items-center md:text-[17px] text-[14px] font-semibold text-gray-500 m-5 mx-10" to="/rules" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false);}}>პირობები</Link>
          
        
          <Link className={`flex items-center md:text-[17px] text-[14px] font-semibold text-gray-500 m-5 mx-10`}   style={{position: "absolute", top: `${Math.max((screenHeight - 170), 251.4)}px`}} // in pixels
 to="/contact" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false);}}>კონტაქტი </Link>
          </div>
          

        )}



        
          <Link className="hidden md:flex items-center m-5 ml-16" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>მთავარი</Link>
          <Link className="hidden md:flex items-center m-5" to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>ჩვენს შესახებ</Link>
          <Link className="hidden md:flex items-center m-5 text-[#2f62a1] font-semibold" to="/items" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>გასაყიდი ნივთები</Link>
          <Link className="hidden md:flex items-center m-5" to="/rules" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>პირობები</Link>
          <Link className="hidden md:flex items-center my-5 !ml-auto mx-2 " to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>კონტაქტი </Link>
          
        </div>
      </nav>
    </>)

}
