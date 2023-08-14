
import Header from './components/Header'
import Pagination from './components/Pagination';
import Blogs from './components/Blogs';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import  './App.css'


export default function App() {

  const {fetchBlogPost} =useContext(AppContext);

  useEffect( () =>{
    fetchBlogPost();
  },[]);


  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-y-3'>
        
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  )
}
