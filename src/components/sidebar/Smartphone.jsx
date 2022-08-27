import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import {kontenbase} from '../../lib/kontenbase';

import xseries from "../../assets/dummies/find.jpg";
import renoseries from "../../assets/dummies/reno.jpg";
import aseries from "../../assets/dummies/a.jpg";


const Smartphone = ({category}) => {
    const navigate = useNavigate();

    // States
    const[list,setList] = useState([]);

    //useEffect
    useEffect(()=>{
         getSmartphones();
    },[])

    // Functions
    const renderSlide = (item) => {
     return ( <SwiperSlide>
                 <div className="flex flex-col items-center shrink-0 cursor-pointer" onClick={()=>{navigate(`/phone/${item._id}`)}}>
                    <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                      <img src={item.image[0].url} className="w-24 h-24 object-cover"/>
                    </div>
                   <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{item.name}</span>
                 </div>
             </SwiperSlide>)
    };


    const getSmartphones = async() => {
      if(category === "x"){

        const { data, error } = await kontenbase.service('Phones').find({limit:4,where:{category_id:3}});
        if(error) return console.log(error);
        setList(data) 
    
      } else if(category === "reno"){
    
        const { data, error } = await kontenbase.service('Phones').find({limit:5,where:{category_id:4}});
        if(error) return console.log(error);
        setList(data) 
    
      } else {

        const { data, error } = await kontenbase.service('Phones').find({limit:5,where:{category_id:5}});
        if(error) return console.log(error);
        setList(data) 
        
      }
    };


  return (
    <div className='mt-8'>
          <Swiper spaceBetween={20} slidesPerView={4} onSlideChange={() => {}} onSwiper={()=>{}}>
             <SwiperSlide>
               <div className="flex flex-col items-center cursor-pointer" onClick={()=>{navigate(`/products?type=phone&category=${category}`)}}>
                    <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                        <img src={category === "x" ? xseries : category === "reno" ? renoseries : aseries} className="w-24 h-24 object-cover"/>
                    </div>
                    <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{category === "x" ? "Find X Series" : category === "reno" ? "Find Reno Series" : "Find A Series"}</span>
              </div>
              </SwiperSlide>
              {list.map(item => renderSlide(item))}
          </Swiper>

         <div className="flex flex-row space-x-12 mt-4 items-center">
             <button onClick={()=>{navigate(`/products?type=phone&category=${category}`)}} className="p-4 bg-black text-white text-xs">{`All ${category === "x" ? " Find X-Series" : category === "reno" ? "Reno Series" : "A Series"}`}</button>
             <button className="p-4 bg-white text-black text-xs">Bandingkan</button>
         </div>
    </div>
  )
}

export default Smartphone