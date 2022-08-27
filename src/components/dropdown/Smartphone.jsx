import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import {kontenbase} from '../../lib/kontenbase';

import xseries from "../../assets/dummies/find.jpg";
import renoseries from "../../assets/dummies/reno.jpg";
import aseries from "../../assets/dummies/a.jpg";

const Smartphone = () => {
  const navigate = useNavigate();

  // States
  const[list,setList] = useState([]);

  const[type,setType] = useState("x-series")

  // useEffect
  useEffect(()=>{
       getPhones()
  },[type])

  // Functions
  const getPhones = async() => {
     if(type === "x-series"){

          const { data, error } = await kontenbase.service('Phones').find({limit:4,where:{category_id:3}});
          if(error) return console.log(error);
          setList(data) 
      
        } else if(type === "reno"){
      
          const { data, error } = await kontenbase.service('Phones').find({limit:5,where:{category_id:4}});
          if(error) return console.log(error);
          setList(data) 
      
        } else {

          const { data, error } = await kontenbase.service('Phones').find({limit:5,where:{category_id:5}});
          if(error) return console.log(error);
          setList(data) 
          
        }
  };

  const renderItem = (item) => {
    return (
      <div className="flex flex-col items-center p-4 cursor-pointer" onClick={()=>{navigate(`/phone/${item._id}`)}}>
            <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                 <img src={item.image[0].url}/>
            </div>
            <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{item.name}</span>
      </div>
          )
  }

  return (
    <>
    <div className="mb-8 flex flex-row justify-center space-x-4 font-medium">
        <span className={`cursor-pointer duration-150 ${type === "x-series" ? "text-black" : "text-slate-700" }`} onMouseEnter={()=>{setType("x-series")}}>Find X Series</span>
        <span className={`cursor-pointer duration-150 ${type === "reno" ? "text-black" : "text-slate-700" }`} onMouseEnter={()=>{setType("reno")}}>Reno Series</span>
        <span className={`cursor-pointer duration-150 ${type === "a" ? "text-black" : "text-slate-700" }`} onMouseEnter={()=>{setType("a")}}>A Series</span>
    </div>

    <div className="flex flex-row space-x-4">

          <div className="flex flex-col items-center p-4 cursor-pointer" onClick={()=>{navigate(`/products?type=phone&category=${type}`)}}>
                 <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                      <img src={type === "x-series" ? xseries : type === "reno" ? renoseries : aseries} className="w-24 h-24 object-cover"/>
                 </div>
                 <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{type === "x-series" ? "Find X Series" : type === "reno" ? "Find Reno Series" : "Find A Series"}</span>
          </div>

          {list.map(item => renderItem(item))}
    </div>

    <div className="flex flex-row space-x-12 mt-4 items-center">
         <span className="underline underline-offset-1 mt-4 cursor-pointer" onClick={()=>{navigate(`/products?type=phone`)}}>Tampilkan semua ponsel</span>
         <button onClick={()=>{navigate(`/products?type=phone&category=${type}`)}} className="p-4 bg-black text-white">{`All ${type === "x-series" ? " Find X-Series" : type === "reno" ? "Reno Series" : "A Series"}`}</button>
         <button className="p-4 bg-white text-black">Bandingkan</button>
    </div>
   
         
    </>
  )
}

export default Smartphone