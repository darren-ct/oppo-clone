import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { HomeContext } from "../pages/Home";
import { ProductInterface } from "../interfaces/ProductInterface"

const Product = ({id,name,image,short_desc,height,type}) => {
  const navigate = useNavigate();
  const {belowMd,belowXsm} = useContext(HomeContext);

  const navigateTo = () => {
    if(type === "iot") return navigate(`/iot/${id}`) 
    navigate(`/phone/${id}`)
  }

  return (
    <div className={`w-full flex flex-col items-center space-y-4 cursor-pointer ${belowMd && "mb-10"}`} onClick={navigateTo}>
        <div className="overflow-hidden">
           <img src={image} className={`object-cover w-full mb-4 scale-100 hover:scale-125 hover:opacity-70 duration-150`} 
           style={!belowMd ? {height:height} : belowMd && !belowXsm ? {height:500,width:380} : {height:250,width:190}}/>
        </div>
        <span className="text-base font-medium">{name}</span>
        <span className="text-sm font-light">{short_desc}</span>
        <div className="flex flex-row space-x-4 items-center">
            <button className="text-xs p-4 bg-black text-white">Lebih Lanjut</button>
            <span className="text-xs underline underline-offset-4 cursor-pointer">Beli Sekarang</span>
        </div>
    </div>
  )
}

export default Product