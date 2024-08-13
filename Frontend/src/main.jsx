import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Home, Books, Contact, About, Signup} from './components'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter,Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { userContext, UserContextProvider } from './context/AuthUserContext.jsx'

//a component for get right component (used in route you can see:)
const BookorSignup = ()=>{
  const {user} = useContext(userContext);
  return (user?<Books/>:<Signup/>);
}

//IIFE
// (()=>{
//   const {user} = useContext(userContext);
//   if(!user){
//     setTimeout(() => {
//       document.querySelector("#myModal").classList.add("hidden");
//     }, 10000);
//   }
// })();




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>} />
        <Route path='/books' element={<BookorSignup/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<Signup/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
   <UserContextProvider>
       <RouterProvider router={router} />
   </UserContextProvider>
  
)
