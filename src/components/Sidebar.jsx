import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {kontenbase} from '../lib/kontenbase'

import Support from './sidebar/Support';
import Iot from './sidebar/Iot.jsx';
import Smartphone from './sidebar/Smartphone.jsx';

import search from '../assets/icons/search.png';
import cross from '../assets/icons/cross.png';
import arrow from '../assets/icons/right.png';
import plus from '../assets/icons/plus.png';
import minus from '../assets/icons/minus.png';
import {popular} from '../helpers/index';


const Sidebar = ({isSidebar,promo}) => {

     const navigate = useNavigate();
     
     // States
     const[list,setList] = useState(["Oppo Zoom","Oppo Reno 10X"]);
     const[input,setInput] = useState("");
     const[activeInput,setActiveInput] = useState(false);

     const[activeTab,setActiveTab] = useState(0);
     const[activeSlider,setActiveSlider] = useState(0);

     //  UseEffect
     useEffect(()=>{
             if(input) getProducts()
     },[input])

     // Function
     const toggle = (type,id) => {
           if(type === "tab") {
               if(activeTab === id) return setActiveTab(0)
               return setActiveTab(id)
           };

           if(type === "slider"){
               if(activeSlider === id) return setActiveSlider(0)
               return setActiveSlider(id)
           };
     };

     const toggleIcon = (type,id) => {
           if(type === "tab"){
               if(activeTab === id) return minus
               return plus
           };

           if(type === "slider"){
               if(activeSlider === id) return minus
               return plus
           };
     };

     const onChange = (e) => {
           setInput(e.target.value)
     };

     const getProducts = async() => {
           // getProducts
           let { data, error } = await kontenbase.service('Phones').find({lookup: ['_id','name']});
           if(error) return console.log(error);

           data = data.filter(item =>  item.title.toLowerCase().trim().startsWith(input.toLowerCase().trim()) === true);
           setList(data)
     };

  return (
    <div className={`${!isSidebar && 'translate-x-full'} block lg:hidden fixed right-0 ${!promo ? 'top-16' : 'top-18'} w-full h-full px-16 py-4 bg-white duration-200 z-50`}>

        {/* Profile */}
        <div className='flex flex-row mb-12 mt-12 items-center'>
               <div className='w-14 h-14 rounded-full mr-4 bg-slate-300'> </div>
               <span className='flex flex-row'>
                    <p className='cursor-pointer'>sign in</p> / <p className='cursor-pointer'>sign up</p>
               </span>
        </div>

        {/* Search */}
        <div className='relative mb-8 flex flex-row items-center'>
               <img src={search} className='absolute left-5 top-4 w-6 h-6'/>
               <input className='flex-1 py-4 px-14  bg-slate-50 rounded-full outline-none' type="text" placeholder='Cari oppo.com' onChange={onChange} onFocus={()=>{setActiveInput(true)}} value={input} />
               { activeInput && input? <img src= {cross} className="absolute right-24 top-4 w-6 h-6 cursor-pointer" onClick={()=>{setInput("")}}/> : ""}
               { activeInput ? <span style={{color:"#046a38",marginLeft:24,cursor:"pointer"}} onClick={()=>{setActiveInput(false)}}>Batal</span> : ""}
        </div>

        {/* List */}
        <div className={`${activeInput ? "opacity-0 hidden" : "opacity-100 block"}`}>
           <div className='relative py-5 border-gray-200 border-b-2'>
                <div style={{color:'#030016'}} className="cursor-pointer" onClick={()=>{toggle("tab",1)}}>Smartphone</div>
                <img src={toggleIcon("tab",1)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("tab",1)}}/> 
                                 

                {/* dropdown */}
                <div className={`${activeTab === 1 ? "visible":"h-0 invisible opacity-0"}`}>
                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs" onClick={()=>{navigate("/products")}}>Tampilkan Semua Ponsel</div>
                           <img src={arrow} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{navigate("/products")}}/>
                    </div>

                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs" onClick={()=>{toggle("slider",1)}}>Find X Series</div>
                           <img src={toggleIcon("slider",1)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("slider",1)}}/>
                           {activeSlider === 1 ? <Smartphone category='x' /> : ""}
                    </div>

                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs" onClick={()=>{toggle("slider",2)}}>Reno Series</div>
                           <img src={toggleIcon("slider",2)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("slider",2)}}/>
                           {activeSlider === 2 ? <Smartphone category='reno' /> : ""}
                    </div>

                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs" onClick={()=>{toggle("slider",3)}}>A Series</div>
                           <img src={toggleIcon("slider",3)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("slider",3)}}/>
                           {activeSlider === 3 ? <Smartphone category='a' /> : ""}
                    </div>
                </div>
           </div>




           <div className='relative py-5 border-gray-200 border-b-2'>
                <div style={{color:'#030016'}} className="cursor-pointer" onClick={()=>{toggle("tab",2)}}>Produk IoT</div>

                <img src={toggleIcon("tab",2)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("tab",2)}}/> 
                                

                {/* dropdown */}
                <div className={`${activeTab === 2 ? "visible":"h-0 invisible opacity-0"}`}>
                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs" onClick={()=>{navigate("/products?category=iot")}}>Lihat Semua</div>
                           <img src={arrow} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{navigate("/products?category=iot")}}/>
                    </div>

                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs" onClick={()=>{toggle("slider",4)}}>Audio</div>
                           <img src={toggleIcon("slider",4)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("slider",4)}}/>
                           {activeSlider === 4 ? <Iot category='audio'/> : ""}
                    </div>

                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs"  onClick={()=>{toggle("slider",5)}}>Wearables</div>
                           <img src={toggleIcon("slider",5)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("slider",5)}}/>
                           {activeSlider === 5 ? <Iot category='wearables' /> : ""}
                    </div>
                </div>
           </div>




           <div className='relative py-5 border-gray-200 border-b-2'>
                <div style={{color:'#030016'}} className="cursor-pointer" onClick={()=>{navigate("/tokoresmi")}}>Toko Resmi</div>
           </div>




           <div className='relative py-5 border-gray-200 border-b-2'>
                <div style={{color:'#030016'}} className="cursor-pointer"  onClick={()=>{toggle("tab",3)}}>Tentang OPPO </div>
                
                <img src={toggleIcon("tab",3)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("tab",3)}}/> 

                <div className={`${activeTab === 3 ? "visible":"h-0 invisible opacity-0"}`}>
                     <div className='relative py-4 px-4 text-slate-500 text-xs'>Cerita Kami</div>
                     <div className='relative py-4 px-4 text-slate-500 text-xs'>Jelajah</div>
                     <div className='relative py-4 px-4 text-slate-500 text-xs'>Kanal Berita</div>
                     <div className='relative py-4 px-4 text-slate-500 text-xs'>Kegiatan</div>
                     <div className='relative py-4 px-4 text-slate-500 text-xs'>My OPPO</div>
               </div>
           </div>




           <div className='relative py-5 border-gray-200 border-b-2'>
                <div style={{color:'#030016'}} className="cursor-pointer"  onClick={()=>{navigate("/store")}}>ColorOS</div>
           </div>



           <div className='relative py-5 border-gray-200 border-b-2'>
                <div style={{color:'#030016'}} className="cursor-pointer" onClick={()=>{toggle("tab",4)}}>Dukungan</div>
                <img src={toggleIcon("tab",4)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("tab",4)}}/>

                {/* Dropdown */}
                <div className={`${activeTab === 4 ? "visible":"h-0 invisible opacity-0"}`}>
                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs" onClick={()=>{navigate("/contact")}}>Kontak kami</div>
                           <img src={arrow} className='absolute bottom-4 right-0 w-4 h-4 cursor-pointer' onClick={()=>{navigate("/contact")}}/>
                    </div>

                    <div className='relative py-4 px-4'>
                           <div className="cursor-pointer text-slate-500 text-xs" onClick={()=>{toggle("slider",6)}}>Layanan Mandiri</div>
                           <img src={toggleIcon("slider",6)} className='absolute top-5 right-0 w-4 h-4 cursor-pointer' onClick={()=>{toggle("slider",6)}}/>
                           {activeSlider === 6 ? <Support /> : ""}
                    </div>
                </div>
           </div>


        </div>

        {/* Search Result */}
        <div className={`${!activeInput ? "opacity-0 hidden" : "opacity-100 block"}`}>
             {list.length === 0 || input === "" ? 
             <div className='text-xs text-slate-500 mb-7'>Pencarian Populer</div> 
             : ""}
             
             {list.length === 0 || input === "" ? 
             popular.map(item => <div className='mb-4 cursor-pointer' onClick={()=>{setInput(item)}}>{item}</div>) 
             : list.map(item => <div className='mb-4 cursor-pointer text-slate-700' onClick={()=>{navigate(`/phone/${item._id}`)}}>{item.name}</div>)}
        </div>
        

    </div>
  )
}

export default Sidebar


{/* <a target="_blank" href="https://icons8.com/icon/3220/plus">Plus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
{/* <a target="_blank" href="https://icons8.com/icon/85496/minus">Minus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
{/* <a target="_blank" href="https://icons8.com/icon/61/forward">Forward</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}