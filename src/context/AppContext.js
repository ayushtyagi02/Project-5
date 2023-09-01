import { baseUrl } from "../baseUrl";
import { createContext, useState } from "react";


export const AppContext = createContext()
 export default function AppContextProvider({children}){
  const [loading, setLoading]=useState(true)
  const [pageno, setPageno]= useState(1)
  const [totalpages, setTotalPages]= useState(null)
  const [posts, setPosts]= useState([])
  
  async function fetchData(pageno){
    setLoading(true)
    let url=`${baseUrl}?page=${pageno}`;
    try{
      const res= await fetch(url)
      const data= await res.json()
      console.log(data)
      if (!data.posts || data.posts.length === 0)
      throw new Error("Something Went Wrong");
      setPageno(data.page)
      setPosts(data.posts)
      setTotalPages(data.totalPages) //faltu laga mujhe to 
      
    

    }
    catch(err){
      setLoading(true)
      setTotalPages(null) 
      setPosts([])
  }
  setLoading(false)
 }
 function pageChangeHandler(pageno){
    setPageno(pageno)
    fetchData(pageno)
 }
 const values={
  loading,
  pageno,
  totalpages,
  setLoading,
  setPageno,
  setTotalPages,
  setPosts,
  posts,
  fetchData,
  pageChangeHandler
}
 return <AppContext.Provider value={values}>
 {children}
</AppContext.Provider>
}
