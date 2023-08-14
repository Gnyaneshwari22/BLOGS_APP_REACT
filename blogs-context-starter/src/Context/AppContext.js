import { useState } from "react";
import {baseUrl} from "../baseUrl"
import { createContext } from "react";


export const AppContext = createContext();

 export default function AppContextProvider({children}){

     const [loading, settLoading] =useState(false);
     const [posts, setPosts] = useState([]);
     const [page, setPage] =useState(1);
     const [totalPages, setTotalPages]= useState(null);

     //data filling

     async function fetchBlogPost(page =1){
           settLoading(true);


           let url= `${baseUrl}?page= ${page}`;
           try{
               const response= await fetch(url);
               const data= await response.json();
               setPage(data.page);
               setPosts(data.posts);
               setTotalPages(data.totalPages);
           }
           catch(error){
               alert("Error while fetching the data...");
               setPage(1);
               setPosts([]);
               setTotalPages(null);
           }
           settLoading(false);

    }

    function handlePageChange(page){
    
        setPage(page);
        fetchBlogPost(page);
     }

     const value = {
           posts,
           setPosts,
           loading,
           settLoading,
           page,
           setPage,
           totalPages,
           setTotalPages,
           fetchBlogPost,
           handlePageChange
     };

     //step2

     return <AppContext.Provider value={value}>
               {children}
           </AppContext.Provider>;

}





