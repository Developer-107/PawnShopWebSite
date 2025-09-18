import { Link, useLocation } from "react-router-dom";


export default function Item() {


  const location = useLocation();   // the location object
  
  const { item } = location.state || {}; // fallback if state is undefined



  
  return (
    <>
    <div id='item' className="flex justify-center">
    <div className="flex mt-[5rem] contentContainer bg-white p-10 py-20">
    
    
    <div className=" mr-auto">

        <img src={item?.url} alt={item?.title} className="w-[400px]  object-cover mr-19 mb-2 rounded"/>
    </div>







    <div className="flex flex-col itemPageDiv justify-start w-full">


    <h1 className="ItemPage ">{item?.title}</h1>
    <div className="flex flex-col itemPageDivSubD mt-5 w-full">
      <ul className="w-full">
        <li className="flex w-full"><p className="">ხელმწისაწვდომია მაღაზიებში:</p> <Link to="https://maps.app.goo.gl/pmftPPBSybyrtbwA7?g_st=ipc" target="_blank" 
            rel="noopener noreferrer" className="ml-auto"> ხიზანიშვილის 30, თბილისი</Link></li>
        <br/>
        <li className="flex w-full"><p className="">მდგომარეობა:</p> <p className="ml-auto"> {item?.state}</p></li>
        <br/>
        <li className="flex w-full"><p className="">ბრენდი:</p> <p className="ml-auto"> {item?.brand}</p></li>
        <br/>
        <li className="flex w-full"><p className="">მოდელი:</p> <p className="ml-auto"> {item?.model}</p></li>
        <br/>
      </ul> 
      <div className="flex flex-row itemPageDivSubDGray items-center">
      <p className="text-[25.505px] text-green-700  font-bold self-start pl-[22.5px] mt-[7px]">{item.priceSale}₾ <span className="text-[14px] text-semibold line-through text-gray-400 ml-1">{item.priceBefore}₾</span></p>
<Link
            to="https://maps.app.goo.gl/pmftPPBSybyrtbwA7?g_st=ipc" target="_blank" 
            rel="noopener noreferrer"
            state={{ item }}
            className="ml-auto buttonInItemsBuy !text-[white] !py-4 !px-10 !mt-0 "
          >
            მხოლოდ მაღაზიაში
          </Link>
      </div>

    </div>

    <br/>
    
    </div>
    
    
    

    </div>
    
    


    </div>
    


  </>

  );}
 


