import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
export default function App() {
  const { fetchData, page} = useContext(AppContext);

  useEffect(() => {
  
    fetchData(page);
   
  }, []);

  return (
    <div>
    
      <Header />
      <div className="my-[100px]">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}
