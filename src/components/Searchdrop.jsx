import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom";
import { kontenbase } from "../lib/kontenbase";

import {popular} from "../helpers/index"

const Searchdrop = ({isSearch,setIsSearch,promo}) => {

  const navigate = useNavigate();

  //States
  const[value,setValue] = useState("");
  const[list,setList] = useState([])


  //useEffects
  useEffect(()=>{
    if(isSearch && document.body){
        document.body.classList.add("hide-scroll")
   } else if(document.body) {
        document.body.classList.remove("hide-scroll")
   };
  },[isSearch]);

  useEffect(()=>{
     if(value) getResults()
  },[value])

  //Functions
  const onChange = (e) => {
        setValue(e.target.value)

  };
  
  const getResults = async() => {
        // getProducts
        let { data, error } = await kontenbase.service('Phones').find({lookup: ['_id','name']});
        if(error) return console.log(error);


        data = data.filter(item =>  item.name.toLowerCase().trim().startsWith(value.toLowerCase().trim()) === true);
        setList(data)
  };

  const ignoreClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div onClick={()=>{setIsSearch(false)}} className={`${isSearch && "lg:opacity-100 lg:flex"} opacity-0 hidden fixed left-0 top-0 z-50 w-full h-full flex-col items-center space-y-4 duration-200`} style={{background:'rgba(0,0,0,.8)'}}>
          <input placeholder="Cari produk" type="text" value={value} onClick={ignoreClick} onChange={onChange} className={`${!promo ? "mt-4" : "mt-28"} p-4 outline-none rounded-full text-white`} style={{width:600,background:'rgba(0,0,0,.1)'}}/>
          <div className="flex flex-col bg-white p-8" style={{width:600}} onClick={ignoreClick}>
                {list.length === 0 || value === "" ? 
                <div className='text-xs text-slate-500 mb-7'>Pencarian Populer</div> 
                : ""}
             
                {list.length === 0 || value === "" ? 
                popular.map(item => <div className='mb-4 cursor-pointer' onClick={()=>{setValue(item)}}>{item}</div>) 
                : list.map(item => <div className='mb-4 cursor-pointer text-slate-700' onClick={()=>{navigate(`/phone/${item._id}`);setIsSearch(false)}}>{item.name}</div>)}
          </div>
    </div>
  )
}

export default Searchdrop