import React from 'react'
import {Navbar, Footer} from './components'
import {Outlet} from "react-router-dom"
import {Toaster} from 'react-hot-toast'
// import { UserContextProvider } from './context/AuthUserContext.jsx'

function App() {
  return <>
      
        <div className='dark:bg-slate-900 dark:text-white'>
          <Navbar/>
          <Toaster/>
          <Outlet/>
          <Footer/>
        </div>
      
  </>
}

export default App