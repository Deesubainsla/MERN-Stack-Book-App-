import React from 'react'
import {Navbar, Footer} from './components'
import {Outlet} from "react-router-dom"

function App() {
  return <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
  </>
}

export default App