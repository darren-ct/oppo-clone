import white from '../assets/icons/whitecross.png';
import { PromoInterface } from '../interfaces/PromoInterface';

const Promo = ({promo,hidePromo} : PromoInterface) => {
  return (
    <div style={{background:"#046a38"}} className={`${!promo && "hidden" } fixed top-0 left-0 z-50 w-full p-8 pb-8 flex flex-wrap items-center justify-center`}>
        <span className="text-white mr-10" >Beli ponsel dapatkan hadiah gratis</span>
        <span className="text-white underline underline-offset-8 cursor-pointer">Lebih lanjut</span>
        <img src={white} className="fixed top-8 right-12 w-6 h-6 cursor-pointer" onClick={hidePromo}/>
    </div>
  )
}

export default Promo

// https://www.kindpng.com/downpng/iTJTxix_transparent-wrong-cross-png-black-flag-with-white/