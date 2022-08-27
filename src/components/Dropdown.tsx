import { useEffect } from "react";

import Smartphone from "./dropdown/Smartphone.jsx";
import About from "./dropdown/About";
import Iot from "./dropdown/Iot.jsx";
import Support from "./dropdown/Support";

import { DropInterface } from "../interfaces/DropInterface"

const Dropdown = ({type,isDropdown,toggleDropdown,promo}:DropInterface) => {

  const renderItems = () => {
        switch(type){
          case "smartphone":
               return <Smartphone />
          break;

          case "iot":
               return <Iot />
          break;

          case "about":
               return <About />
          break;

          case "support":
             return <Support />
          break;

          default :
          

        }
  }

  useEffect(()=>{
     if(isDropdown && document.body){
          document.body.classList.add("hide-scroll")
     } else if(document.body) {
          document.body.classList.remove("hide-scroll")
     };
  },[isDropdown])

  return (
    <div className={`fixed w-full left-0 border-t-2 hidden lg:flex ${isDropdown ? "h-full flex flex-col opacity-1" : "h-0 hidden opacity-0"} ${!promo ? 'top-16' : 'top-18'} z-50`}>
          
          <div className="flex flex-col items-center pt-8 pb-12 bg-white">
              {renderItems()}
          </div>

          <div className="flex-1 bg-black" style={{opacity:0.5}} onClick={toggleDropdown}>
          </div>
    </div>
  )
}

export default Dropdown