import { Outlet, useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function Layout(){

  const location = useLocation();
  

    return (
        <>
        <Navbar/>
        <Outlet /> {/* renders matched child route */}
        <Footer/>
        </>
    )
}



export default Layout;