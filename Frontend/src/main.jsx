import React, { useContext,lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Home, Books, Profile, AddBook, Users} from './components'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter,Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { userContext, UserContextProvider } from './context/AuthUserContext.jsx'

//a component for get right component (used in route you can see:)


//Logic to protect Book route from un loggedin user:
// const BookorSignup = ()=>{
//   const {user} = useContext(userContext);
//   return (user ?<Books/>:<Signup/>);
// }

const Authentication = ()=>{
  const userInfo = useContext(userContext);
  return (userInfo.user? <RouterProvider router={routerwithuser} /> : <RouterProvider router={routerwithoutuser} />);
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




const routerwithuser = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>} />
        {/* <Route path='/books' element={<BookorSignup/>} /> //to protect book route */}
        <Route path='/books' element={<Books/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/profile' element={<Profile/>} />       
        <Route path='/addbook' element={<AddBook/>} />
    </Route>
  )
)

const Lazylogin = lazy(()=> import('./components/Login.jsx'));
// const Lazysingup = lazy(()=> import('./components/Signup.jsx'));
// Lazylogin.preload = () => import('./components/Signup.jsx');
const routerwithoutuser = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App/>} >
        <Route path='' element={
            <Lazylogin />
        } />
        
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
   <UserContextProvider>

      <Toaster/>
      <Authentication/>
      
   </UserContextProvider>
  
)
