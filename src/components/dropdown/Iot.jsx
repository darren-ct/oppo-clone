import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import {kontenbase} from '../../lib/kontenbase';

const Iot = () => {
  const navigate = useNavigate();

  // States
  const[list,setList] = useState([]);
  const[type,setType] = useState("audio");

  // useEffect
  useEffect(()=>{
       getIots()
  },[type])

  // Functions
  const getIots = async() => {

    if(type === "audio"){

    const { data, error } = await kontenbase.service('Iots').find({limit:6,where:{category_id:1}});
    if(error) return console.log(error);
    setList(data) 

  } else {

    const { data, error } = await kontenbase.service('Iots').find({limit:3,where:{category_id:2}});
    if(error) return console.log(error);
    setList(data) 

  };

  };

  const renderItem = (item) => {
    return (
      <div className="flex flex-col items-center p-4 cursor-pointer" onClick={()=>{navigate(`/iot/${item._id}`)}}>
            <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                 <img src={item.image[0].url} className="w-24 h-24 object-cover"/>
            </div>
            <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{item.name}</span>
      </div>
          )
  }

  return (
    <>
    <div className="mb-8 flex flex-row justify-center space-x-4 font-medium">
        <span className={`cursor-pointer duration-150 ${type === "audio" ? "text-black" : "text-slate-700" }`} onMouseEnter={()=>{setType("audio")}}>Audio</span>
        <span className={`cursor-pointer duration-150 ${type === "wearables" ? "text-black" : "text-slate-700" }`} onMouseEnter={()=>{setType("wearables")}}>Wearables</span>
    </div>

    <div className="flex flex-row space-x-4">
          {list.map(item => renderItem(item))}
    </div>

    
    <span className="underline underline-offset-1 mt-4 cursor-pointer" onClick={()=>{navigate(`/products?type=iot&category=${type}`)}}>Lihat semua</span>
         
    </>
  )
}

export default Iot