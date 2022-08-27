import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

import axios from "axios";

import plus from "../assets/icons/plus.png"
import minus from "../assets/icons/minus.png"

const Phone = () => {
  const {id} = useParams();
  
  // States
  const[product,setProduct] = useState({
    name : "",
    description : "",
    image : [
      {
      fileName : "",
      url : ""
      }
    ]
  });
  const[activeTab,setActive] = useState(0);

  // Effects
  useEffect(()=>{
      window.scrollTo(0, 0)
      getPhone()
  },[])

  // Functions
  const getPhone = async() => {
      
         try{
           const res = await axios.get(`https://api.kontenbase.com/query/api/v1/9b5b9994-1cdd-4d45-af12-3e1f71a10c2c/Phones/${id}`);
           const phone = res.data;
           setProduct(phone)

         } catch(err) {
             console.log(err)
         }
  }

  const switchTab = (id:number):void => {
      if(activeTab === id){
        setActive(0)
      } else {
        setActive(id)
      }
  }

  const renderImage = (id:number) => {
      if(activeTab === id){
        return minus
      } else {
        return plus
      }
  }
 
  return (
  <div className="p-8 xl:container xl:mx-auto">
   
   {/* Head */}
    <div className="flex flex-row justify-between items-center border-y-2 border-slate-200 py-4 bg-white">
         <span>{product.name !== "" ? product.name : ""}</span>
         <div className="hidden sm:flex flex-row space-x-4 items-center">
             <span className="text-xs cursor-pointer">Gambaran</span>
             <span className="text-xs cursor-pointer">Bandingkan</span>
             <span className="text-xs cursor-pointer">Spesifikasi</span>
         </div>
         <button className="p-4 text-white" style={{background:"#046a38"}}>Beli Sekarang</button>
    </div>

  {/* Main */}
    <div className="flex flex-col space-y-24 space-x-4 md:flex-row justify-center items-center pt-24 pb-24 border-b-2 border-slate-200">
          <div className="flex flex-col space-y-8 items-center md:items-start w-full md:w-1/4" >
              <span className="text-5xl text-center">{product.name}</span>
              <span className="text-xl font-light w-80 text-center md:text-left">{product.description}</span>
          </div>
          <div className="flex flex-col w-full md:w-1/2 items-center">
              <img src={product.image[0].url} className="-z-10"/>
              <span className="text-lg text-slate-800">Glaze Black | Ceramic White</span>
              <span className="text-xs text-slate-800 text-center font-light" style={{maxWidth:200}}>*Gambar produk hanya untuk referensi. Silahkan lihat produk yang sebenarnya</span>
          </div>
    </div>
  
  {/* Details */}
    <div className="relative flex flex-col md:flex-row space-y-6 py-8 border-b-2 border-slate-200 cursor-pointer" onClick={()=>{switchTab(1)}}>
        <span className="text-lg font-medium mr-32">Ukuran dan Bobot</span>
        <img src={renderImage(1)} className="absolute right-0 top-4 w-4 h-4"/>
        <div className={`${activeTab === 1 ? "h-min opacity-100 visible" : "h-0 opacity-0 invisible"} duration-150 flex flex-col space-y-4`}>
            <span className="font-medium">Tinggi</span>
            <span className="text-slate-500 font-light">163.7 mm</span>
            <span className="font-medium">Lebar</span>
            <span className="text-slate-500 font-light">73.9 mm</span>
            <span className="font-medium">Ketebalan</span>
            <span className="text-slate-500 font-light">8.5 mm</span>
            <span className="font-medium">Bobot</span>
            <span className="text-slate-500 font-light">218 g</span>
            <span className="text-xs text-slate-500 font-light">*Catatan: Berat ponsel mungkin sedikit berbeda tergantung pada konfigurasi produk, proses manufaktur, dan metode pengukuran.</span>
        </div>
    </div>

    <div className="relative flex flex-col md:flex-row space-y-6 py-8 border-b-2 border-slate-200 cursor-pointer" onClick={()=>{switchTab(2)}}>
        <span className="text-lg font-medium mr-32">Penyimpanan</span>
        <img src={renderImage(2)} className="absolute right-0 top-4 w-4 h-4"/>
        <div className={`${activeTab === 2 ? "h-min opacity-100 visible" : "h-0 opacity-0 invisible"} duration-150 flex flex-col space-y-4`}>
            <span className="font-medium">Kapasitas RAM dan ROM</span>
            <span className="text-slate-500 font-light">12GB + 256GB</span>
            <span className="font-medium">Tipe RAM</span>
            <span className="text-slate-500 font-light">LPDDR5 @ 3200 MHz 4 x 16-bit</span>
            <span className="font-medium">Spesifikasi ROM</span>
            <span className="text-slate-500 font-light">UFS3.1 @ 1x2 Jalur HS-Gear4</span>
            <span className="font-medium">Kartu Penyimpanan Perangkat</span>
            <span className="text-slate-500 font-light">Tidak didukung</span>
            <span className="font-medium">USB OTG</span>
            <span className="text-slate-500 font-light">Didukung</span>
            <span className="text-xs text-slate-500 font-light">* Penyimpanan internal yang tersedia mungkin lebih kecil karena bagian dari penyimpanan internal ditempati oleh perangkat lunak. Ruang memori sebenarnya dapat berubah karena pembaruan aplikasi, operasi pengguna, dan faktor terkait lainnya.</span>
        </div>
    </div>

    <div className="relative flex flex-col md:flex-row space-y-6 py-8 border-b-2 border-slate-200 cursor-pointer" onClick={()=>{switchTab(3)}}>
        <span className="text-lg font-medium mr-32">Layar</span>
        <img src={renderImage(3)} className="absolute right-0 top-4 w-4 h-4"/>
        <div className={`${activeTab === 3 ? "h-min opacity-100 visible" : "h-0 opacity-0 invisible"} duration-150 flex flex-col space-y-4`}>
            <span className="font-medium">Ukuran</span>
            <span className="text-slate-500 font-light">6.70"</span>
            <span className="font-medium">Rasio Layar</span>
            <span className="text-slate-500 font-light">92.70%</span>
            <span className="font-medium">Resolusi</span>
            <span className="text-slate-500 font-light">QHD+(3216 × 1440)</span>
            <span className="font-medium">Refresh Rate</span>
            <span className="text-slate-500 font-light">Maksimum: 120 Hz (Dinamis)</span>
            <span className="font-medium">Touch Sampling Rate</span>
            <span className="text-slate-500 font-light">Maksimum: 240 Hz (2 jari)</span>
            <span className="font-medium">Gamut Warna</span>
            <span className="text-slate-500 font-light">Mode vivid: 97% NTSC/100% DCI-P3 (Umum)</span>
            <span className="text-slate-500 font-light">Mode gentle: 71% NTSC/100% sRGB (Umum)</span>
            <span className="font-medium">Kedalaman Warna</span>
            <span className="text-slate-500 font-light">1,07 miliar warna (10-bit)</span>
            <span className="font-medium">Kerapatan Piksel</span>
            <span className="text-slate-500 font-light">525 PPI</span>
            <span className="font-medium">Kecerahan</span>
            <span className="text-slate-500 font-light">Kecerahan puncak default (umum) diukur saat layar penuh menyala: 500 nits</span>
            <span className="text-slate-500 font-light">Kecerahan puncak (umum) diukur dengan peningkatan intensitas eksitasi: 800 nits </span>
            <span className="text-slate-500 font-light">Kecerahan puncak (umum) diukur saat hanya sebagian layar yang menyala: 1300 nits </span>
            <span className="text-slate-500 font-light">Tingkat kecerahan: 8192</span>
            <span className="font-medium">Panel</span>
            <span className="text-slate-500 font-light">AMOLED (Flexible/LTPO)</span>
            <span className="font-medium">Kaca Pelindung</span>
            <span className="text-slate-500 font-light">Corning® Gorilla® Glass Victus™</span>
        </div>
    </div>

    <div className="relative flex flex-col md:flex-row space-y-6 py-8 border-b-2 border-slate-200 cursor-pointer" onClick={()=>{switchTab(4)}}>
        <span className="text-lg font-medium mr-32">Kamera</span>
        <img src={renderImage(4)} className="absolute right-0 top-4 w-4 h-4"/>
        <div className={`${activeTab === 4 ? "h-min opacity-100 visible" : "h-0 opacity-0 invisible"} duration-150 flex flex-col space-y-4`}>
            <span className="font-medium">Belakang</span>
            <span className="text-slate-500 font-light">Kamera Utama 50MP: f/1.7; FOV 80°; lensa 1G6P; didukung AF; motor fokus loop tertutup; stabilisasi 5-sumbu OIS ganda </span>
            <span className="text-slate-500 font-light">Kamera Sudut Ultra Lebar 50MP: f/2.2; FOV 110 °; lensa 7P; AF didukung; motor fokus loop tertutup; 4 cm fotografi makro didukung </span>
            <span className="text-slate-500 font-light">Kamera Telefoto 13MP: f/2.4; FOV 45°; lensa 5P; AF didukung</span>
            <span className="font-medium">Depan</span>
            <span className="text-slate-500 font-light">Kamera Depan 32MP: f/2.4; FOV 90°; lensa: 5P, fokus tetap</span>
            <span className="font-medium">Mode Pemotretan</span>
            <span className="text-slate-500 font-light">Belakang: Foto, Video, Malam, Pro, Panorama, Portrait, Time-lapse, Slow-motion, Text scanner, Hi-</span>
            <span className="text-slate-500 font-light">Res, Film, Long exposure, Dual-view video, Stiker, dan Google Lens </span>
            <span className="text-slate-500 font-light">Depan: Foto, Video, Panorama, Potret, Malam, Time-lapse, Dual-view video, dan Stiker</span>
        </div>
    </div>

    <div className="relative flex flex-col md:flex-row space-y-6 py-8  cursor-pointer" onClick={()=>{switchTab(5)}}>
        <span className="text-lg font-medium mr-32">Ukuran dan Bobot</span>
        <img src={renderImage(5)} className="absolute right-0 top-4 w-4 h-4"/>
        <div className={`${activeTab === 5 ? "h-min opacity-100 visible" : "h-0 opacity-0 invisible"} duration-150 flex flex-col space-y-4`}>
            <span className="font-medium">Belakang</span>
            <span className="text-slate-500 font-light">Kamera belakang: 4K (30fps/60fps), 1080P (30fps/60fps), dan 720P (30fps/60fps)</span>
            <span className="text-slate-500 font-light">Video Slow-mo: 1080P (240fps) dan 720P (480fps)</span>
            <span className="text-slate-500 font-light">Zoom video: 4K (30fps/60fps), 720P (30fps/60fps), 1080P (30fps/60fps)</span>
            <span className="font-medium">Depan</span>
            <span className="text-slate-500 font-light">Mendukung 1080P/720P (30fps) (default: 1080P (30fps))</span>
        </div>
    </div>


  </div>
  )
}

export default Phone