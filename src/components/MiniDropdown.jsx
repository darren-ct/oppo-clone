

const MiniDropdown = () => {

  return (
    <div className="hidden lg:block absolute top-16 right-20 z-50 w-48 bg-white p-4 rounded drop-shadow-lg">
        <span className="text-slate-800 cursor-pointer">sign in</span>
        <div className="h-0.5 bg-slate-200 my-2"></div>
        <span className="text-slate-800 cursor-pointer">sign up</span>
    </div>
  )
}

export default MiniDropdown