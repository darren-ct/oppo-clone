import { useState,useEffect,createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {kontenbase} from '../lib/kontenbase';

import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from '../components/Loader';
import Product from '../components/Product.jsx';

import { dunia } from '../helpers';
export const HomeContext = createContext(null)

const Home = () => {
     const navigate = useNavigate();

    //   States
    const [belowMd,setBelowMd] = useState(window.innerWidth < 768);
    const [belowXsm,setBelowXsm] = useState(window.innerWidth < 484);

    const[sliders,setSliders] = useState([]);
    const[products,setProducts] = useState([]);
    const[accesories,setAccesories] = useState([]);

    //   Loaders
    const[prodLoading,setProdLoading] = useState(false);
    const[accLoading,setAccLoading] = useState(false);

    // UseEffect
    useEffect(()=>{
        getProducts();
        getAcc();
        window.scrollTo(0,0);
    },[])

    useEffect(()=>{
          window.addEventListener('resize', handleWindowResize);
          window.addEventListener('resize',handleWindowResize2)

          return () => {
          window.removeEventListener('resize', handleWindowResize);
          window.removeEventListener('resize',handleWindowResize2)
          };
     },[])

    //Functions
    const handleWindowResize = () => {
          if(window.innerWidth < 768) return setBelowMd(true);
          if(window.innerWidth > 768) return setBelowMd(false);
    };

    const handleWindowResize2 = () => {
     if(window.innerWidth < 484) return setBelowXsm(true);
     if(window.innerWidth > 484) return setBelowXsm(false);
    };

    const getProducts = async() => {
        setProdLoading(true)
        const { data, error } = await kontenbase.service('Phones').find({limit:6})
        setProdLoading(false)

        if(error) return console.log(error);
        setSliders(data);
        setProducts(data);

    };

    const getAcc = async() => {
          setAccLoading(true)
          const { data, error } = await kontenbase.service('Iots').find({limit:2});
          setAccLoading(false)

          if(error) return console.log(error);
          setAccesories(data)

    };
     
  return (
  <HomeContext.Provider value={{belowMd,belowXsm}}>
    <div className='w-full'>

     {/* Slider */}
    <div className={`relative ${belowXsm ? "w-4/5 mx-auto" : "w-full"}`}>
       { prodLoading  ? <Loader size={64} fixed={true} /> :
       <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={() => {}} onSwiper={()=>{}}>
         {sliders.map(slider => (
             <SwiperSlide>
               <div className='flex flex-col-reverse items-center  md:flex-row md:justify-center space-x-8' style={{height:600,backgroundColor:"#FEFEFE"}}>
     
               <div className='flex flex-col justify-center bg-transparent'>
                     <div className='text-3xl'>{slider.name}</div>
                     <div className='mt-1 mb-3'>{slider.short_desc}</div>
                     <div className='flex flex-row space-x-8 items-end'>
                          <button className='p-4 flex flex-col items-center justify-center bg-black text-white text-xs' onClick={()=>{navigate(`/phone/${slider._id}`)}}>Lebih Lanjut</button>
                          <span className='underline underline-offset-4 text-xs cursor-pointer'>Pre-order sekarang</span>
                     </div>
               </div>
     
             <img src={slider.image[0].url} style={belowXsm  ? {width:400} : belowMd ? {width:400} : {width:500,height:480}} className='object-cover mb-8 md:mb-0' />
     
          </div>
          </SwiperSlide>
         ))}
      </Swiper> }
    </div>

   {/* Warning */}
   <div className='px-8 mt-10 xl:container xl:mx-auto'>
      <div className='flex flex-col p-8 xl:mt-14 mt-20 items-start' style={{backgroundColor:"#344050"}}>
           <span className="text-white">Paket Perlindungan OPPO</span>
           <p className='text-white text-xs mt-2'>Kecelakaan bisa terjadi. Tambahkan paket perlindungan untuk Smartphone Anda</p>
           <button className='bg-white p-4 text-xs mt-8 cursor-pointer'>Cek Sekarang</button>
      </div>
    </div>

    {/* Product */}
    <div className='px-8 xl:container xl:mx-auto mt-16'>
         <div className='flex flex-row justify-between items-center'>
              <span className='text-2xl'>Smartphone</span>
              <p className='underline underline-offset-4 cursor-pointer'>Tampilkan semua</p>
         </div>

         { prodLoading ? <Loader size={64} fixed={false} /> :
         <div className='mt-16'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                     <div className='md:w-1/2 w-full mb-16 md:mb-0'>
                         { products.length !== 0 && <Product id={products[0]._id} name={products[0].name} image={products[0].image[0].url} short_desc={products[0].short_desc} height={712} type="phone"/> }
                     </div>

                     {/* 320 */}

                     <div className='flex flex-col space-y-24 md:mb-0 mb-16 md:w-2/5 w-full'>
                         { products.length !== 0 && <Product id={products[1]._id} name={products[1].name} image={products[1].image[0].url} short_desc={products[1].short_desc} height={320} type="phone"/> }
                         { products.length !== 0 &&  <Product id={products[2]._id} name={products[2].name} image={products[2].image[0].url} short_desc={products[2].short_desc} height={320} type="phone"/> }
                     </div>
              </div>


              <div className='flex flex-col mt-16 md:flex-row md:mt-28 md:justify-between'>
                    <div className='w-full md:w-1/4 mb-16 md:mb-0'>
                    { products.length !== 0  && <Product id={products[3]._id} name={products[3].name}  image={products[3].image[0].url} short_desc={products[3].short_desc} height={240} type="phone"/> }
                    </div>

                    <div className="w-full md:w-1/4">
                    { products.length !== 0 && <Product id={products[4]._id} name={products[4].name}  image={products[4].image[0].url}short_desc={products[4].short_desc} height={240} type="phone"/> }
                    </div>  

                    <div className="w-full md:w-1/4">
                    { products.length !== 0 && <Product id={products[5]._id} name={products[5].name}  image={products[5].image[0].url}short_desc={products[5].short_desc} height={240} type="phone"/> }
                    </div>  

              </div>
         </div>
         }
    </div>

    {/* Aksesori */}
    <div className='px-8 xl:container xl:mx-auto mt-16 mb-16'>
         <div className='flex flex-row justify-between items-center'>
              <span className='text-2xl'>Aksesori</span>
              <p className='underline underline-offset-4 cursor-pointer'>Tampilkan semua</p>
         </div>

               {  accLoading ? <Loader size={64} fixed={false} /> :

              <div className='flex flex-col md:flex-row md:justify-between mt-16'>
                    <div className="mb-16 md:mb-0 md:w-7/12 w-full">
                      {  accesories.length === 2 && <Product id={accesories[0]._id} name={accesories[0].name} image={accesories[0].image[0].url} short_desc={accesories[0].short_desc} height={320} type="iot"/> }
                    </div>

                    <div className="md:w-2/6 w-full">
                      { accesories.length === 2 && <Product id={accesories[1]._id} name={accesories[1].name} image={accesories[1].image[0].url} short_desc={accesories[1].short_desc} height={320} type="iot"/> }
                    </div>  
              </div>

               }
         </div>

     {/*Dunia OPPO*/}
    <div style={{background:"#c0a69a"}}>
         <div className='px-8 py-24 xl:container xl:mx-auto'>
               <div className='text-2xl mb-8'> Dunia OPPO</div>
               {/* Slider */}
               <Swiper spaceBetween={25} slidesPerView={belowMd ? 1 : 3} onSlideChange={() => {}} onSwiper={()=>{}}>
                   {dunia.map(item => (
                    <SwiperSlide>
                        <div className='w-full cursor-pointer'>
                               <img src={item.image} className='w-full h-80 object-cover mb-4' />
                               <span className='text-base'>{item.name}</span>
                        </div>
                   </SwiperSlide>
                   ))}
               </Swiper>
         </div>
    </div>

    {/* Tetap Terhubung dengan OPPO */}
    <div style={{background:"#fff6ed"}}>
        <div className='flex flex-col items-center space-y-12 px-8 py-24  sm:container sm:mx-auto'>
              <div className='text-4xl text-center '>Tetap Terhubung dengan OPPO Indonesia</div>
              <div className='text-center  text-slate-500'>Mari berlangganan untuk menerima berita, promosi dan rekomendasi tentang produk dan layanan dari OPPO Indonesia.</div>
              <div className='flex flex-col sm:flex-row w-full' style={{maxWidth:1000}}>
                  <input className='p-4 mr-2 flex-1 outline-none' type="text" placeholder='Masukan email Anda'/>
                  <button className='text-lg p-4 bg-black text-white'>Langganan</button>
              </div>
              <div className='text-xs  text-slate-500 underline underline-offset-1'>Dengan berlangganan Anda telah setuju dengan Kebijakan OPPO Indonesia</div>
        </div>
    </div>

   </div>
  </HomeContext.Provider>
  )
}

export default Home