import { useEffect, useState,useContext } from 'react';
import { SidebarContext } from '../Sidebar';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from "../Loader";

import {kontenbase} from '../../lib/kontenbase';


const Iot = ({category,setIsSidebar}) => {
    const navigate = useNavigate();
    const{belowXsm} = useContext(SidebarContext);

    // States
    const[list,setList] = useState([]);
    const[loader,setLoader] = useState(false);

    //useEffect
    useEffect(()=>{
         getIots();
    },[])

    // Functions
    const renderSlide = (item) => {
     return ( <SwiperSlide>
                 <div className="flex flex-col items-center shrink-0 cursor-pointer" onClick={()=>{navigate(`/iot/${item._id}`);setIsSidebar(false)}}>
                    <div className="flex items-center justify-center w-24 h-24">
                      <img src={item.image[0].url} className="w-24 h-24 object-cover"/>
                    </div>
                   <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{item.name}</span>
                 </div>
             </SwiperSlide>)
    };


    const getIots = async() => {
      if(category === "audio"){

        setLoader(true)
        const { data, error } = await kontenbase.service('Iots').find({limit:6,where:{category_id:1}});
        if(error) return console.log(error);
        setLoader(false)
        setList(data) 
    
      } else {

        setLoader(true)
        const { data, error } = await kontenbase.service('Iots').find({limit:3,where:{category_id:2}});
        if(error) return console.log(error);
        setLoader(false)
        setList(data) 
        
      }
    };


  return (
    <div className='mt-8 relative' style={{minHeight:100}}>
    { loader ? <Loader size={64} fixed={false}/> :
    <Swiper spaceBetween={20} slidesPerView={belowXsm ? 1 : 4} onSlideChange={() => {}} onSwiper={()=>{}}>
       {list.map(item => renderSlide(item))}
   </Swiper>
    }
    </div> 
  )
}

export default Iot