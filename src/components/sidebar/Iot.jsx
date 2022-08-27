import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import {kontenbase} from '../../lib/kontenbase';

const Iot = ({category}) => {
    const navigate = useNavigate();

    // States
    const[list,setList] = useState([]);

    //useEffect
    useEffect(()=>{
         getIots();
    },[])

    // Functions
    const renderSlide = (item) => {
     return ( <SwiperSlide>
                 <div className="flex flex-col items-center shrink-0 cursor-pointer" onClick={()=>{navigate(`/iot/${item._id}`)}}>
                    <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                      <img src={item.image[0].url} className="w-24 h-24 object-cover"/>
                    </div>
                   <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{item.name}</span>
                 </div>
             </SwiperSlide>)
    };


    const getIots = async() => {
      if(category === "audio"){

        const { data, error } = await kontenbase.service('Iots').find({limit:6,where:{category_id:1}});
        if(error) return console.log(error);
        setList(data) 
    
      } else {

        const { data, error } = await kontenbase.service('Iots').find({limit:3,where:{category_id:2}});
        if(error) return console.log(error);
        setList(data) 
        
      }
    };


  return (
    <div className='mt-8'>
    <Swiper spaceBetween={20} slidesPerView={4} onSlideChange={() => {}} onSwiper={()=>{}}>
       {list.map(item => renderSlide(item))}
   </Swiper>
    </div>
  )
}

export default Iot