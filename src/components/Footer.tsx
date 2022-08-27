import { useState } from "react"

import cross from "../assets/icons/whitecross.png";
import add from "../assets/icons/white-add.svg";

import fb from "../assets/icons/fb.png";
import ig from "../assets/icons/ig.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import chat from "../assets/icons/chat.png";

const Footer = () => {

    // State
    const[active,setActive] = useState(0);

    // Functions
    const switchActive = (id:number) => {
         if(id === active){
            setActive(0)
         } else {
            setActive(id)
         };
    };

    const renderIcon = (id:number) => {
         if(id === active){
            return cross
         } else {
            return add
         }
    }

  return (
    <div style={{background:"#121212"}}>
        {/* Links */}
        <div className='flex flex-row flex-wrap justify-center sm:justify-start md:justify-start px-8 py-24 md:container md:mx-auto'>
               <div className='flex flex-col space-y-4 mb-8 md:mr-16 mr-0 md:w-28 w-full'>
                    <div className='text-white flex flex-row justify-between items-center' onClick={()=>{switchActive(1)}}>
                        Smartphone <img src={renderIcon(1)} className="h-4 w-4 inline-block md:hidden cursor-pointer"/>
                    </div>

                    <div className="bg-slate-500 w-full h-0.5 md:hidden"></div>

                    <div className={`flex flex-col space-y-4 duration-150 ${active === 1 ? "h-min" : "h-0 opacity-0 invisible md:h-min md:opacity-100 md:visible"}`}>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Find X5 Pro 5G</span>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Find X3 Pro</span>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Reno8</span>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Reno8 5G</span>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Reno8 Pro 5G</span>
                    </div>
               </div>


               <div className='flex flex-col space-y-4 mb-8 md:mr-16 mr-0 md:w-28 w-full'>
                    <div className='text-white flex flex-row justify-between items-center' onClick={()=>{switchActive(2)}}>
                        Produk IoT <img src={renderIcon(2)} className="h-4 w-4 inline-block md:hidden cursor-pointer"/>
                    </div>

                    <div className="bg-slate-500 w-full h-0.5 md:hidden"></div>

                    <div className={`flex flex-col space-y-4 duration-150 ${active === 2 ? "h-min" : "h-0 opacity-0 invisible md:h-min md:opacity-100 md:visible"}`}>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Enco Air2 Pro</span>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Enco Air</span>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Enco Buds2</span>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Enco BUds</span>
                         <span className='text-slate-500 text-xs cursor-pointer'>OPPO Enco X</span>
                    </div>
               </div>


               <div className='flex flex-col space-y-4 mb-8 md:mr-16 mr-0 md:w-28 w-full'>
                    <div className='text-white flex flex-row justify-between items-center' onClick={()=>{switchActive(3)}}>
                        Lokasi Pembelian <img src={renderIcon(3)} className="h-4 w-4 inline-block md:hidden cursor-pointer"/>
                    </div>

                    <div className="bg-slate-500 w-full h-0.5 md:hidden"></div>

                    <div className={`flex flex-col space-y-4 duration-150 ${active === 3 ? "h-min" : "h-0 opacity-0 invisible md:h-min md:opacity-100 md:visible"}`}>
                          <span className='text-slate-500 text-xs cursor-pointer'>Toko Resmi</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Unduh App Resmi</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>E-commerce</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Retail</span>
                    </div>
               </div>


               <div className='flex flex-col space-y-4 mb-8 md:mr-16 mr-0 md:w-28 w-full'>
                    <div className='text-white flex flex-row justify-between items-center' onClick={()=>{switchActive(4)}}>
                        Dukungan <img src={renderIcon(4)} className="h-4 w-4 inline-block md:hidden cursor-pointer"/>
                    </div>

                    <div className="bg-slate-500 w-full h-0.5 md:hidden"></div>

                    <div className={`flex flex-col space-y-4 duration-150 ${active === 4 ? "h-min" : "h-0 opacity-0 invisible md:h-min md:opacity-100 md:visible"}`}>
                          <span className='text-slate-500 text-xs cursor-pointer'>Hubungan Kami</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>OPPO Care</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Service Center</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Periksa Harga Spare Part</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Layanan Antar Jemput</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Status Garansi</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Pembaruan Perangkat Lunak</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>FAQ</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Security Response Center</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Kebijakan Garansi OPPO</span>
                    </div>
               </div>


               <div className='flex flex-col space-y-4 md:mr-16 mr-0 md:w-28 w-full'>
                    <div className='text-white flex flex-row justify-between items-center' onClick={()=>{switchActive(5)}}>
                        Tentang OPPO <img src={renderIcon(5)} className="h-4 w-4 inline-block md:hidden cursor-pointer"/>
                    </div>

                    <div className="bg-slate-500 w-full h-0.5 md:hidden"></div>

                    <div className={`flex flex-col space-y-4 duration-150 ${active === 5 ? "h-min" : "h-0 opacity-0 invisible md:h-min md:opacity-100 md:visible"}`}>
                          <span className='text-slate-500 text-xs cursor-pointer'>Cerita Kami</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Teknologi</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Ruang Berita</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>Kegiatan</span>
                          <span className='text-slate-500 text-xs cursor-pointer'>OPPO Membership</span>
                    </div>
               </div>
        </div>

        {/* Others  */}
        <div className="flex flex-col space-y-12 px-8 py-4 md:container md:m-auto">
                <div className="flex flex-row items-center space-x-4">
                     <div className="flex flex-row items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer">
                        <img src={chat} className="w-6"/>
                    </div>
                      <span className="underline underline-offset-1 text-white cursor-pointer">Livechat</span>
                </div>

                <span className="text-white">Email: support.id@gmail.com</span>
                <span className="text-white">Hotline: 021 2907 6776</span>
                <span className="text-white">Premium Hotline: 021 5071 0000</span>

                <div className="flex flex-row space-x-8">
                    <div className="flex flex-row items-center justify-center w-10 h-10 rounded-full bg-slate-400 cursor-pointer">
                        <img src={fb} />
                    </div>
                    <div className="flex flex-row items-center justify-center w-10 h-10 rounded-full bg-slate-400 cursor-pointer">
                        <img src={twitter} />
                    </div>
                    <div className="flex flex-row items-center justify-center w-10 h-10 rounded-full bg-slate-400 cursor-pointer">
                        <img src={youtube} />
                    </div>
                    <div className="flex flex-row items-center justify-center w-10 h-10 rounded-full bg-slate-400 cursor-pointer">
                        <img src={ig} />
                    </div>

                </div>

                <span className="text-white underline underline-offset-1">Indonesia (Indonesian)</span>

                <div className="inline-flex flex-row items-center">
                    <span className="text-slate-500 cursor-pointer">Kebijakan</span>
                    <div className="bg-slate-500 h-4 w-px mx-1"></div>
                    <span className="text-slate-500 cursor-pointer">Syarat Penggunaan</span>
                    <div className="bg-slate-500 h-4 w-px mx-1"></div>
                    <span className="text-slate-500">{`Copyright 2004-${new Date().getFullYear()} OPPO. All rights reserved`}</span>
                </div>
        </div>
       


    </div>
  )
}

export default Footer