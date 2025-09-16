import React from "react";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import MainPageAboutUs from "../components/MainPageAboutUs";
import MainPageIclouldInfo from "../components/MainPageIcloudInfo";
import MainPageOtherServices from "../components/MainPageOtherServices";
import MainPageInvitationDiv from "../components/MainPageInvitationDiv.jsx";
import MainPageSecondInfoDiv from "../components/MainPageSecondInfoDiv.jsx";
import MainPagePercents from "../components/MainPagePercents.jsx";



export default function Home() {






  
  return (
    <>
    <Slider/>
    <div className="flex justify-center">
    <div className="mt-[5rem]  contentContainer">
    
    <MainPageAboutUs/>
    <MainPageIclouldInfo/>
    <MainPageOtherServices/>

    
    <MainPageInvitationDiv/>
    <MainPageSecondInfoDiv/>


    <MainPagePercents/>

    </div>
    </div>

  </>

  );}
 