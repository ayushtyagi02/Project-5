import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css"
export default function Header() {
  const {isDark,setisDark}=useContext(AppContext)
  return (
    
    <header className="relative flex">
      <div  className= {`${(isDark)? "dark py-4 border-b-1 flex border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 " : "light py-4 border-b-2 flex border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 "} duration-150`}>
      <h1 className="font-bold text-3xl uppercase mx-auto">
        Codehelp Blogs
        
      </h1></div>
      <div className={`${isDark ? "bg-slate-400 text-white ": "bg-yellow-100 text-black"} duration-500 m-[6px] right-2 p-1 justify-center items-center flex gap-x-2 fixed top-1 rounded-md`}>
    <button className={`${isDark ? "opacity-70":"bg-yellow-300 "} duration-75 font-semibold rounded-md py-2 px-3`}  onClick={()=>setisDark(false)}>Light</button>
    <button className={`${isDark ? "bg-slate-600 ":"opacity-70"} duration-75 font-semibold rounded-md py-2 px-3`} onClick={()=>setisDark(true)}>Dark</button>
    {console.log(isDark)}
  </div>
    
      
      
      
    </header>
  );
}
// ${isDark ? "bg-slate-500" : "bg-white"}