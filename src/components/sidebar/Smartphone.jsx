import { useEffect, useState,useContext } from 'react';
import { SidebarContext } from '../Sidebar';
import { useNavigate } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';

import Loader from '../Loader';

import {kontenbase} from '../../lib/kontenbase';

import xseries from "../../assets/dummies/find.jpg";
import renoseries from "../../assets/dummies/reno.jpg";
import aseries from "../../assets/dummies/a.jpg";


const Smartphone = ({category,setIsSidebar}) => {
    const navigate = useNavigate();
    const{belowXsm} = useContext(SidebarContext);

    // States
    const[list,setList] = useState([]);
    const[loader,setLoader] = useState(false);

    //useEffect
    useEffect(()=>{
         getSmartphones();
    },[])

    // Functions
    const renderSlide = (item) => {
     return ( <SwiperSlide>
                 <div className="flex flex-col items-center shrink-0 cursor-pointer" onClick={()=>{navigate(`/phone/${item._id}`);setIsSidebar(false)}}>
                    <div className="flex items-center justify-center">
                      <img src={item.image[0].url} className="w-24 h-24 object-cover"/>
                    </div>
                   <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{item.name}</span>
                 </div>
             </SwiperSlide>)
    };


    const getSmartphones = async() => {
      if(category === "x"){

        setLoader(true)
        const { data, error } = await kontenbase.service('Phones').find({limit:4,where:{category_id:3}});
        if(error) return console.log(error);
        setLoader(false)
        setList(data) 
    
      } else if(category === "reno"){
    
        setLoader(true)
        const { data, error } = await kontenbase.service('Phones').find({limit:5,where:{category_id:4}});
        if(error) return console.log(error);
        setLoader(false)
        setList(data) 
    
      } else {

        setLoader(true)
        const { data, error } = await kontenbase.service('Phones').find({limit:5,where:{category_id:5}});
        if(error) return console.log(error);
        setLoader(false)
        setList(data) 
        
      }
    };


  return (
    <div className='mt-8 relative'>
        { loader ? <Loader size={64} fixed={false}/> :
          <Swiper spaceBetween={20} slidesPerView={belowXsm ? 1 : 4} onSlideChange={() => {}} onSwiper={()=>{}}>
             <SwiperSlide>
               <div className="flex flex-col items-center cursor-pointer" onClick={()=>{navigate(`/products?type=phone&category=${category}`)}}>
                    <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                        <img src={category === "x" ? xseries : category === "reno" ? renoseries : aseries} className="w-24 h-24 object-cover"/>
                    </div>
                    <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{category === "x" ? "Find X Series" : category === "reno" ? "Find Reno Series" : "Find A Series"}</span>
              </div>
              </SwiperSlide>
              {list.map(item => renderSlide(item))}
          </Swiper> }

         <div className="flex flex-row space-x-12 mt-4 items-center">
             <button onClick={()=>{navigate(`/products?type=phone&category=${category}`)}} className="p-4 bg-black text-white text-xs">{`All ${category === "x" ? " Find X-Series" : category === "reno" ? "Reno Series" : "A Series"}`}</button>
             <button className="p-4 bg-white text-black text-xs">Bandingkan</button>
         </div>
    </div>
  )
}

export default Smartphone