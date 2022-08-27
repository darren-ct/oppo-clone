import { useState,useContext } from 'react';
import { AppContext } from '../App.tsx';

import Sidebar from './Sidebar.jsx';
import Dropdown from './Dropdown';
import MiniDropdown from './MiniDropdown.jsx';

import oppo from '../assets/oppologo.png';
import account from '../assets/icons/account.png';
import search from '../assets/icons/search.png';
import shop from '../assets/icons/shop.png';
import menu from '../assets/icons/menu.png';
import cross from '../assets/icons/outline-cross.png'
import Searchdrop from './Searchdrop';

const Header = ({promo}) => {
   const{onDrop,toggleDrop} = useContext(AppContext);

   //State
   const[isSidebar,setIsSidebar]= useState(false);
   const[isSearch,setIsSearch]= useState(false);
   const[isDropdown,setIsDropdown]= useState(false);
   const[type,setType] = useState("");

   //Functions
   const toggleSidebar = () => {
      setIsSidebar(prev => !prev)
   };

   const toggleDropdown = () => {
      setIsDropdown(prev => !prev)
   };

   const toggleSearch = () => {
      setIsSearch(true)
   }

   const switchDropdown = (item) => {
         if(item === type ){
            toggleDropdown()
            setType("")
         } else {
            setIsDropdown(true)
            setType(item)
         }
   };


   return (
   <>
    <section className={`w-full ${promo ? "mt-24" : "mt-0"} relative`}>
          <div className="px-8 py-4 xl:container xl:mx-auto">
            
               <div className="flex flex-row justify-between">
                     
                     <img src={oppo} className={`${isSearch && 'lg:invisible'} w-16 h-6`}/>

                     <div className={`${isSearch && 'lg:invisible'} hidden lg:flex flex-row space-x-8 center`}>
                           <span className={`relative text-slate-600 hover:text-black ${type === "smartphone" && isDropdown ? "text-black" : ""} text-xs cursor-pointer duration-150`} onClick={()=>{switchDropdown("smartphone")}}>
                              Smartphone
                              <div className={`absolute ${promo ? "-bottom-4" : "-bottom-4"} left-0 w-full h-0.5 bg-black opacity-0 ${type === "smartphone" && isDropdown ? "lg:opacity-100" : ""} duration-150 `}></div>
                           </span>

                           <span className={`relative text-slate-600 hover:text-black ${type === "iot" && isDropdown ? "text-black" : ""} text-xs cursor-pointer duration-150`} onClick={()=>{switchDropdown("iot")}}>
                              Produk IoT
                              <div className={`absolute -bottom-4 left-0 w-full h-0.5 bg-black opacity-0 ${type === "iot" && isDropdown ? "lg:opacity-100" : ""} duration-150 `}></div>
                           </span>

                           <span className="relative text-slate-600 hover:text-black text-xs cursor-pointer duration-150 overflow-x-hidden">
                              Toko Resmi
                             
                           </span>

                           <span className={`relative text-slate-600 hover:text-black ${type === "about" && isDropdown ? "text-black" : ""} text-xs cursor-pointer duration-150`} onClick={()=>{switchDropdown("about")}}>
                              Tentang OPPO
                              <div className={`absolute -bottom-4 left-0 w-full h-0.5 bg-black opacity-0 ${type === "about" && isDropdown ? "lg:opacity-100" : ""} duration-150`}></div>
                           </span>

                           <span className="relative text-slate-600 hover:text-black text-xs cursor-pointer duration-150 overflow-x-hidden">
                              ColorOS
                              
                           </span>

                           <span className={`relative text-slate-600 hover:text-black ${type === "support" && isDropdown ? "text-black" : ""} text-xs cursor-pointer duration-150`} onClick={()=>{switchDropdown("support")}}>
                              Dukungan
                              <div className={`absolute -bottom-4 left-0 w-full h-0.5 bg-black opacity-0 ${type === "support" && isDropdown ? "lg:opacity-100" : ""} duration-150 `}></div>
                          </span>
                     </div>

                     <div className={`${isSearch && 'lg:invisible'} flex flex-row space-x-8 center`}>
                           <img src={search} onClick={toggleSearch} className="hidden lg:inline-block w-6 h-6 cursor-pointer"/>
                           <img src={shop} className="w-6 h-6 cursor-pointer"/>
                           <img src={account} onClick={toggleDrop} className="hidden lg:inline-block w-6 h-6 cursor-pointer"/>
                           {onDrop ? <MiniDropdown/> : ""}
                           <img src={!isSidebar ? menu : cross}  className="inline-block lg:hidden w-6 h-6 cursor-pointer" onClick={toggleSidebar}/>
                     </div>
               </div>

          </div>
    </section>

    <Sidebar  isSidebar={isSidebar} promo={promo}/>
    <Dropdown type={type} isDropdown={isDropdown} toggleDropdown={toggleDropdown} promo={promo}/>
    <Searchdrop isSearch={isSearch} setIsSearch={setIsSearch} promo={promo}/>
  </>
  )
}

export default Header


// {/* <a target="_blank" href="https://icons8.com/icon/59878/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
//     {/* <a target="_blank" href="https://icons8.com/icon/22167/shopping-bag">Shopping Bag</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
//     {/* <a target="_blank" href="https://icons8.com/icon/85050/male-user">Male User</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
//     {/* <a target="_blank" href="https://icons8.com/icon/82749/menu">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
/* <a target="_blank" href="https://icons8.com/icon/95867/multiply">Multiply</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */