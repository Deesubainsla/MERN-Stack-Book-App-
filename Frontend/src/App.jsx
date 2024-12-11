import React, { useContext } from 'react'
import { Navbar, Footer,Login} from './components'
import { Outlet } from "react-router-dom"
// import { Toaster } from 'react-hot-toast'
import { userContext } from './context/AuthUserContext.jsx'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { UserContextProvider } from './context/AuthUserContext.jsx'



function App() {
  const userInfo = useContext(userContext);
  return <>



    {userInfo.user ? 
    (<div className='dark:bg-slate-900 min-h-[100vh] flex flex-col justify-between dark:text-white'>
      <div className='h-full'>
        <Navbar />

        <Outlet />
      </div>
      <Footer />
    </div>) :


      (<div className='min-h-screen max-w-screen overflow-hidden flex flex-col justify-between items-center bg-red-200 gap-2'>
        {/* Header */}
        <div className='w-full shrink-0 shadow-xl h-[64px] flex bg-white justify-center items-center border-b-2 border-red-600'>
          <span className='text-3xl underline text-red-600 duration-300 hover:scale-110 font-extrabold'>MyBook</span>
        </div>


        {/* You can also define routes here without involving main.jsx and outlet */}
        {/* Main content where the routes change */}
        {/* <div className='h-full w-screen py-8 flex justify-center items-center'>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </Router>
        </div>
        */}

        {/* main content */}
       
         <Outlet/>
        
       

        {/* Footer */}
        <Footer />
      </div>)


    }




  </>
}

export default App