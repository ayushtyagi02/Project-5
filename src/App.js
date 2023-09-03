import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
export default function App() {
  const { fetchData, page, isDark} = useContext(AppContext);
  
  useEffect(() => {
  
    fetchData(page);
   
  }, []);

  return (
    <div className={`${isDark ? "dark" : "light"} duration-150`}>
    
      <Header />
      <div className="mt-[93px] mb-[50px] py-6 ">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}
