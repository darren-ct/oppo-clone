import {layanan} from '../../helpers'

const Support = () => {

      const renderBox = (item:{image:string,name:string}) => {
            return (
               <div className="flex flex-col items-center shrink-0 cursor-pointer" onClick={()=>{}}>
                 <div className="flex items-center justify-center bg-slate-400 w-24 h-24">
                      <img src={item.image} className="w-24 h-24 object-cover"/>
                 </div>
                 <span className="mt-4 text-center text-xs" style={{maxWidth:96}}>{item.name}</span>
               </div>
            )
     };
 


  return (
    <>
    <div className="mb-8 font-medium">Layanan Mandiri</div>

    <div className="flex flex-row space-x-4">
          {layanan.map(item => renderBox(item))}
    </div>

    <div className="flex flex-row space-x-12 mt-4 items-center">
         <span className="underline underline-offset-1 cursor-pointer">Kontak kami</span>
         <button className="p-4 bg-black text-white">Lihat Lebih Banyak</button>
    </div>
    </>
  )
}

export default Support