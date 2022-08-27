import {useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";

import {kontenbase} from "../../lib/kontenbase";
import axios from "axios"

interface schemaInterface {
  name : string,
  description : string,
  short_desc : string,
  price : number,
  type : number,
  category : number
}

interface errorInterface {
  name : string,
  description : string,
  short_desc : string,
  price : string,
  image : string
}


const AddProduct = () => {
  const navigate = useNavigate();

  // State
  const[originalImg,setOriginalImg] = useState<string | undefined>(undefined);
  const[imageForm,setImageForm] = useState<any>("");
  const[form,setForm] = useState<schemaInterface>({name : "", description : "", short_desc : "", price : 0, type : 1, category : 3});
  const[errors,setErrors] = useState<errorInterface>({name:"", description:"", short_desc:"", price:"", image:"" });


  // Functions
  const onSelect = (e : any) => {
    setImageForm(e.target.files[0])
  };

  const onChange = (e : any) => {
        setForm(prev => {
          return {...prev,[e.target.name]:e.target.value}
        })
  }

  const submitForm = async(e:any) => {
      e.preventDefault();

      // Reset
      setErrors({name:"", description:"", short_desc:"", price:"", image:"" })

      // Filter
          // isi
      if(!form.name) return setErrors(prev => { return {...prev,name:"Nama tidak boleh kosong"} });
      if(!form.description) return setErrors(prev => { return {...prev,description:"Deskripsi tidak boleh kosong"} });
      if(!form.short_desc) return setErrors(prev => { return {...prev,short_desc:"Deskripsi pendek tidak boleh kosong"} });
      if(!form.price) return setErrors(prev => { return {...prev,price:"Harga tidak boleh kosong"} });
         // panjang
      if(form.name.length < 4) return setErrors(prev => { return {...prev,name:"Nama tidak boleh dibawah 4 karakter"} });
      if(form.description.length < 8) return setErrors(prev => { return {...prev,description:"Deskripsi tidak boleh dibawah 8 karakter"} });
      if(form.short_desc.length < 4) return setErrors(prev => { return {...prev,short_desc:"Deskripsi pendek tidak boleh dibawah 4 karakter"} });
      if(form.price < 0 || Number(form.price) === NaN) return setErrors(prev => { return {...prev,price:"Harga tidak boleh negatif dan harus angka valid"} });
         // image
      if(!imageForm || imageForm === "") return setErrors(prev => { return {...prev, image:"Gambar harus ada"}} );

      try {
        if(form.type === 2){
    
          const { data, error } = await kontenbase.service('Iots').create({
            image: [{...imageForm,fileName : imageForm.name, url:"dwdwdd" }],
            name: form.name,
            description: form.description,
            short_desc : form.short_desc ,
            price : form.price,
            category_id : Number(form.category)
          })

          console.log(data,error)
          navigate('/')
        } else {

          const { data, error } = await kontenbase.service('Phones').create({
            image: [imageForm],
            name: form.name,
            description: form.description,
            short_desc : form.short_desc ,
            price : form.price,
            category_id : Number(form.category)
          })

          console.log(data,error);
          navigate('/')
        };
        

      } catch(err) {
        console.log(err)
      }
  

  };

  // UseEffect
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[]);

  useEffect(()=>{
    if(imageForm && typeof imageForm !== "string"){
    const image = URL.createObjectURL(imageForm);
    setOriginalImg(image)
 
    }
    },[imageForm])



  return (
    <div>
      <div className="px-8 py-32 xl:container xl:mx-auto">
        <span className="text-5xl">Tambah Produk</span>

        <form onSubmit={submitForm} className="flex flex-col mt-16">

            <label className="flex flex-row items-center mb-4" style={{width:310}}>
                   <div className="flex flex-col justify-center items-center p-4 rounded text-white" style={{background:"#046a38"}}>Upload Image</div>
                   <input type="file" className="w-36 h-14 opacity-0" style={{transform:"translateX(-128px)"}} onChange={onSelect} name="image"/>
                   <img src={originalImg ? originalImg : ""} className='w-16 bg-slate-400 -translate-x-28'/>
            </label>
            <p className={`text-red-600 text-xs mb-8`}>{errors.image ? errors.image : ""}</p>


            <input className={`bg-slate-200 text-black p-4 outline-none border-2 ${errors.name && 'border-red-600'} mb-4`} name="name" value={form.name} onChange={onChange} placeholder="Isi Nama produk"/>
            <p className={`text-red-600 text-xs mb-8`}>{errors.name ? errors.name : ""}</p>

            <input className={`bg-slate-200 text-black p-4 outline-none border-2 ${errors.short_desc && 'border-red-600'} mb-4`} name="short_desc" value={form.short_desc} onChange={onChange} placeholder="Isi deskripsi pendek produk"/>
            <p className={`text-red-600 text-xs mb-8`}>{errors.short_desc ? errors.short_desc : ""}</p>

            <input className={`bg-slate-200 text-black p-4 outline-none border-2 ${errors.description && 'border-red-600'} mb-4`} name="description" value={form.description} onChange={onChange} placeholder="Isi deskripsi lengkap" />
            <p className={`text-red-600 text-xs mb-8`}>{errors.description ? errors.description : ""}</p>

            <input className={`bg-slate-200 text-black p-4 outline-none border-2 ${errors.price && 'border-red-600'} mb-4`} name="price" value={form.price} onChange={onChange} placeholder="Isi Harga Jual" />
            <p className={`text-red-600 text-xs mb-8`}>{errors.price ? errors.price : ""}</p>

            <select className="bg-slate-200 text-black p-4 outline-none mb-12" id="type" name="type" onChange={onChange} value={form.type}>
                <option value={1}>Smartphone</option>
                <option value={2}>IoT</option>
            </select>

            <select className="bg-slate-200 text-black p-4 outline-none mb-12" id="category" name="category" onChange={onChange} value={form.category}>
                 <option value={1}>Audio</option>
                 <option value={2}>Wearables</option>
                 <option value={3}>Find X Series</option>
                 <option value={4}>Reno Series</option>
                 <option value={5}>A Series</option>
            </select>

            <button className="w-full text-white p-6 text-xl" style={{background:"#046a38"}}>Pasang Produk</button>


        </form>
      
      </div>
    </div>
  )
}

export default AddProduct