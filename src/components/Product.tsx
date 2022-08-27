import { useNavigate } from "react-router-dom"
import { ProductInterface } from "../interfaces/ProductInterface"

const Product = ({id,name,image,short_desc,height,type}:ProductInterface) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    if(type === "iot") return navigate(`/iot/${id}`) 
    navigate(`/phone/${id}`)
  }

  return (
    <div className="w-full flex flex-col space-y-4 cursor-pointer" onClick={navigateTo}>
        <img src={image} className={`object-cover w-full mb-4`} style={{height:height}}/>
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