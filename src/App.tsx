import { useState,createContext} from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

import Header from './components/Header.jsx';
import Promo from './components/Promo'
import Footer from './components/Footer'
import ChatIcon from './components/ChatIcon';

import Home from './pages/Home';
import Phone from './pages/Phone';
import Iot from './pages/Iot';
import AddProduct from './pages/admin/AddProduct';

import { ContextInterface } from './interfaces/ContextInterface';
export const AppContext = createContext<ContextInterface | null>(null)

function App() {

  // States
  const[promo,setPromo] = useState(true);
  const[onDrop,setOnDrop] = useState(false);

  // Functions
  const toggleDrop = () => {
       setOnDrop(prev => !prev)
  };


  const hidePromo = () => {
        setPromo(false)
  }

  return (
  <AppContext.Provider value={{onDrop,toggleDrop}} >
    <BrowserRouter>
        <Promo promo={promo} hidePromo={hidePromo}/>
        <Header promo={promo} />

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/phone/:id" element={<Phone/>}/>
            <Route path="/iot/:id" element={<Iot/>}/>
            <Route path="/admin/addproduct" element={<AddProduct/>}/>
        </Routes>

        <Footer/>
        <ChatIcon />
    
    </BrowserRouter>
  </AppContext.Provider>
  )
}

export default App;
