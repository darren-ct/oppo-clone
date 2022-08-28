import { useContext } from 'react';
import { SidebarContext } from '../Sidebar';

import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { layanan } from '../../helpers';

const Support = () => {
    const navigate = useNavigate();
    const {belowXsm} = useContext(SidebarContext);

    const renderSlide = (item) => {
           return (
            <SwiperSlide>
              <div className="flex flex-col items-center shrink-0 cursor-pointer" onClick={()=>{}}>
                <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                     <img src={item.image} className="w-24 h-24 object-cover"/>
                </div>
                <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{item.name}</span>
              </div>
            </SwiperSlide>
           )
    };

    return (
    <div className='mt-8'>
        <Swiper spaceBetween={20} slidesPerView={belowXsm ? 1 : 4} onSlideChange={() => {}} onSwiper={()=>{}}>
           {layanan.map(item => renderSlide(item))}
       </Swiper>

        <button className='bg-black text-white text-xs p-4 mt-6 '>Lihat Lebih Banyak</button>
    </div>
  )
}

export default Support
