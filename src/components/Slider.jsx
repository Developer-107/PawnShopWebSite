import React, { useState, useEffect } from "react";
import "../assets/css/slider.css"
import Slider1 from "../assets/images/sliders/slider1.jpg"
import Slider2 from "../assets/images/sliders/slider2.jpg"
import Slider3 from "../assets/images/sliders/slider3.jpg"
import Slider4 from "../assets/images/sliders/slider4.jpg"
import { useNavigate } from "react-router-dom";











export default function Slider () {

const navigate = useNavigate();

const slides = [
    {
      img: Slider1,
      text: (
        <>
          დატოვე აიქლაუდი თანხის სანაცვლოდ
        </>
      ),
      top: "7rem",
    },
    {
      img: Slider2,
      text: "განაახლე ძველი ტექნიკა",
      top: "7rem",
    },
    {
      img: Slider3,
      text: "შეიძინე ტექნიკა რომელიც გსურს",
      top: "7rem",
    },
    {
      img: Slider4,
      text: "გაყიდე ნივთი",
      top: "7rem",
    },
  ];

const [currentSlide, setCurrentSlide] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev % slides.length) + 1);
  }, 10000); // every 3s
  return () => clearInterval(interval);
}, [slides.length]);




return(<>

<div className="my-3 px-2 md:px-5">
<div className="slideshow-container">

    
                  {slides.map((slide, i) => (

                    <div key={ (i + 1)}    className={`slide ${currentSlide === (i + 1) ? "active" : ""}`}>
                        <img  src={slide.img} className={`sliderImage ${currentSlide ===  (i + 1) ? "active" : ""}`} alt="Slide 1" />
                        <div  className="textButtonDiv text-slide-up">
                        <div className="flex text">{slide.text}</div>
                        <button onClick={() => navigate("/contact")} className="button">დაგვიკავშირდი</button>
                        </div>
                    </div>
            ))}


  <a className="prev" onClick={() => setCurrentSlide((prev) => (prev - 2 + 4) % 4 + 1)}>&#10094;</a>
  <a className="next" onClick={() => setCurrentSlide((prev) => (prev % 4) + 1)}>&#10095;</a>
</div>

<div style={{textAlign:"center", marginTop: "1.7px"}}>
  <span className={`dot ${currentSlide === 1 ? "active" : ""}`} onClick={() => setCurrentSlide(1)}></span>
  <span className={`dot ${currentSlide === 2 ? "active" : ""}`} onClick={() => setCurrentSlide(2)}></span>
  <span className={`dot ${currentSlide === 3 ? "active" : ""}`} onClick={() => setCurrentSlide(3)}></span>
  <span className={`dot ${currentSlide === 4 ? "active" : ""}`} onClick={() => setCurrentSlide(4)}></span>

</div>
</div>

</>)}