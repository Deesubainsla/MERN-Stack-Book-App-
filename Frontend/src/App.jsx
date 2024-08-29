import React from 'react'
import {Navbar, Footer} from './components'
import {Outlet} from "react-router-dom"
import {Toaster} from 'react-hot-toast'
// import { UserContextProvider } from './context/AuthUserContext.jsx'

function App() {
  return <>
      
        <div className='dark:bg-slate-900 min-h-[100vh] flex flex-col justify-between dark:text-white'>
          <div className='h-full'>
            <Navbar/>
            <Toaster/>
            <Outlet/>
          </div>
          <Footer/>
        </div>
      
  </>
}

export default App