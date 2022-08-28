import { ColorRing } from "react-loader-spinner";

const Loader = ({size,fixed}:{size:number,fixed:boolean}) => {
  return (
    <div className={`z-50 ${fixed ? "fixed top-32 left-1/2 -translate-y-1/2" : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}`}>
        <ColorRing visible={true} height={size} width={size} ariaLabel="blocks-loading" 
        wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={[ '#046a38','#abbd81','#046a38','#abbd81', '#849b87']}/>
    </div>
  )
}

export default Loader