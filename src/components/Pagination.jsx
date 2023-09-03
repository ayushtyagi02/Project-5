import React, { useContext } from 'react';
import "../App.css"
import { AppContext } from '../context/AppContext';
const Pagination=()=>{
  const {pageno, pageChangeHandler,totalpages,isDark}=useContext(AppContext);
 
  return(
    <div className={`${(isDark) ? "dark fixed bottom-0 inset-x-0 py-2 mb-0 dark ":"light fixed bottom-0 inset-x-0 py-2 mb-0 "} border-t-1 drop-shadow-md border-t-gray-300 duration-150`}>
    <div className="flex items-center gap-x-3 w-11/12 max-w-2xl bg-gray mx-auto">
    {pageno>1 && 
     (<button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={()=>pageChangeHandler(pageno-1)}>Previous</button>)
     }
     {pageno<totalpages && 
     (<button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={()=>pageChangeHandler(pageno+1)}>Next</button>)
     }
     <p className="ml-auto border-2 border-gray-300 py-1 px-4 rounded-md">Page &nbsp; {pageno}  of  {totalpages}</p>
    </div>
     
    </div>
  )
}
export default Pagination


// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// export default function Pagination() {
//   const { page, handlePageChange, totalPages } = useContext(AppContext);

//   if (!totalPages) return null;

//   return (
//   <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300">
//       <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
//         {page > 1 && (
//           <button
//             onClick={() => handlePageChange(page - 1)}
//             className="border-2 border-gray-300 py-1 px-4 rounded-md"
//           >
//             Previous
//           </button>
//         )}
//         {page < totalPages && (
//           <button
//             onClick={() => handlePageChange(page + 1)}
//             className="border-2 border-gray-300 py-1 px-4 rounded-md"
//           >
//             Next
//           </button>
//         )}
//         <p className="text-sm font-semibold ml-auto">
//           Page {page} of {totalPages}
//         </p>
//       </div>
//     </div>
//   );
// }