import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Item() {


  const location = useLocation();   // the location object
  
  const { item: stateItem } = location.state || {};
  const { id } = useParams();
  const [item, setItem] = useState(stateItem);

useEffect(() => {
  if (!item) {
    fetch(`/api/item/${id}`)
      .then(res => res.json())
      .then(data => setItem(data.item || []));
  }
}, [id]);
  
  return (
    <>
    <div id='item' className="flex justify-center">
    <div className="flex mt-[5rem]  contentContainer items-center bg-white p-10 py-20">
    
    
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
      <p className="text-[25.505px] text-green-700  font-bold self-start pl-[22.5px] mt-[7px]">{item?.pricesale}₾ <span className="text-[14px] text-semibold line-through text-gray-400 ml-1">{item?.pricebefore}₾</span></p>
<Link
            to="https://maps.app.goo.gl/pmftPPBSybyrtbwA7?g_st=ipc" target="_blank" 
            rel="noopener noreferrer"
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
 


