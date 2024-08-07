import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form"


function Navbar() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const onSubmit = (data) => console.log(data)

    const [isMenu, setisMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // const[darkMode, setdarkMode] = useState(localStorage.getItem('darkMode')?localStorage.getItem('darkMode'): false);
    const[darkMode, setdarkMode] = useState(false);

    // useEffect(() => {

    //   if(darkMode===true){
    //     {document.documentElement.classList.add('dark');
    //         document.body.classList.add('dark');
    //     }
    //     localStorage.setItem('darkMode',true);
    //   }else{
    //     {document.documentElement.classList.remove('dark');
    //         document.body.classList.remove('dark');
    //     }
    //     localStorage.setItem('darkMode',false);
    //   }
    //   {console.log(darkMode)}
      
    // }, [darkMode])
    useEffect(() => {
             if(darkMode){
                document.documentElement.classList.add('dark');
                // document.body.classList.add('dark');
                console.log("i am in if ")
                // localStorage.setItem('darkMode',true);
              }else{
                document.documentElement.classList.remove('dark');
                // document.body.classList.remove('dark');
                console.log("i am in if ")
                // localStorage.setItem('darkMode',false);
              }
              console.log(darkMode)
    }, [darkMode])
    
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setScrolled(true);
            else setScrolled(false);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const darkmodeToggleButton = <div >
        <label  className=" swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input  onClick={()=>setdarkMode(!darkMode)}  type="checkbox" className="theme-controller" value="synthwave" />

        {/* sun icon */}
        <svg
            
            className="swap-on h-7 w-7 fill-current"
            
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
            className="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
    </label>
    </div>
    // const toggleDropdown = () => {
    //     setisMenu(!isMenu);
    // };
    return (
        
        <div className={`px-8 dark:bg-slate-900 dark:text-white md:px-16 transition bg-white sticky z-50 top-0 left-0 right-0  ${scrolled ? 'dark:bg-slate-800 bg-slate-200 shadow-md ' : ''} `}>
            
            <div className="p-0    navbar ">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden" onClick={() => setisMenu(!isMenu)}>

                        <div id='menu-button' tabIndex={0} role="button" className="btn btn-ghost  ">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>

                        </div>
                        {/* {console.log(isMenu)} */}
                        {isMenu && <ul

                            tabIndex={0}
                            className={` dark:bg-slate-900 menu menu-md dropdown-content ${scrolled ? "dark:bg-slate-800 bg-slate-100" : "bg-white"} rounded-box  mt-3 w-52 p-2  shadow`} >
                            {/* <li><a className='transform transition duration-300 ease-in-out hover:scale-110 hover:text-red-600'>Home</a></li>
                            <li><a className='transform transition duration-300 ease-in-out hover:scale-110 hover:text-red-600'>Books</a></li>
                            <li><a className='transform transition duration-300 ease-in-out hover:scale-110 hover:text-red-600'>Contact</a></li>
                            <li><a className='transform transition duration-300 ease-in-out hover:scale-110 hover:text-red-600'>About</a></li> */}
                            <li><NavLink to='/' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Home</NavLink></li>
                            <li><NavLink to='/books' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Books</NavLink></li>
                            <li><NavLink to='/contact' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Contact</NavLink></li>
                            <li><NavLink to='/about' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>About</NavLink></li>
                        </ul>}

                    </div>
                    <a className="btn btn-ghost text-xl p-0 transform transition ease-in-out duration-300 hover:text-red-600 hover:scale-110  ">BookApp</a>

                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal">
                            <li><NavLink to='/' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Home</NavLink></li>
                            <li><NavLink to='/books' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Books</NavLink></li>
                            <li><NavLink to='/contact' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Contact</NavLink></li>
                            <li><NavLink to='/about' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>About</NavLink></li>
                        </ul>
                    </div>
                    <div className='hidden md:block px-2'>
                        <label className="border border-gray-300 px-2 py-1 rounded-md flex items-center gap-2">
                            <input type="text" className="bg-transparent  outline-none  " placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    {/* sun icon */}
                    {/* <div className='hidden  justify-center items-center md:flex border-gray-300 rounded-full p-0.5 mr-3 '
                    // onClick={()=> setdarkMode(!darkMode)}
                    >
                        {darkmodeToggleButton}
                    </div> */}
                    {/* moon icon */}
                    {/* <button onClick={()=> {setdarkMode(!darkMode); console.log(darkMode)}}>
                        click trial
                    </button> */}

                    {/* <button onClick={()=> { setdarkMode(!darkMode)}} >
                        {darkMode? 'light': 'dark'}
                    </button> */}
                    
                    <button className='flex  justify-center items-center border-gray-300 rounded-full p-0.5 mr-2 '
                    
                    >
                        {darkmodeToggleButton}
                    </button>
                    <a
                        onClick={() => document.querySelector("#myModal").classList.remove("hidden")}
                        className=" dark:bg-red-600 text-white cursor-pointer hover:shadow-lg hover:bg-red-600 bg-black rounded-md px-3 py-2  flex text-center justify-center">Login</a>

                    {/* Modal code is here: */}
                    <div id="myModal" className="hidden fixed  inset-0 bg-slate-300 bg-opacity-50 flex items-center justify-center ">
                        <div className=" bg-white  relative rounded-lg   p-8 rounded shadow-lg w-1/3">
                            {/* <div className="flex justify-end">
                        <button id="closeModalBtn" className="text-gray-500 hover:text-gray-800"
                        onClick={()=>document.querySelector("#myModal").classList.add("hidden")}
                        >&times;</button>
                        </div> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <button className="dark:text-black btn h-[50px] w-[50px] hover:bg-slate-200 btn-sm btn-circle btn-ghost absolute right-2 sm:right-6 top-2 sm:top-6" onClick={() => document.querySelector("#myModal").classList.add("hidden")}>✕</button>
                            <h2 className="text-2xl font-bold text-red-600 mb-10">Login</h2>
                            <div className='mb-5'>
                                <span>Email:</span><br />
                                <input className='p-1 w-full outline-none rounded-md border-[2px]' type="email" placeholder='Enter your Email' {...register("email", { required:true
                                //can also write like this for custom messages
                                // {
                                //     value: true,
                                //     message: "This hello is required:"
                                // }
                                 })} />
                                 <br />
                                {errors.email && <span className='text-sm text-red-600'>This field is required:</span>}
                            </div>
                            <div className='mb-5'>
                                <span>Password:</span><br />
                                <input className='p-1 w-full outline-none rounded-md border-[2px]' type="password" placeholder='Enter your Password' {...register("password", { required: true })}/>
                                <br />
                                {errors.email && <span className='text-sm text-red-600'>This field is required:</span>}
                            </div>
                            <div className='flex justify-center mb-2 items-center sm:hidden'>
                                <button type='submit' className={`bg-red-600 h-fit px-2 duration-300 py-1 text-white hover:scale-110 rounded-md mr-4`} >Login</button>
                            </div>
                            <div className='flex justify-center sm:justify-between'>
                                <button type='submit' className={`bg-red-600 hidden sm:block h-fit px-2 duration-300 py-1 text-white hover:scale-110 rounded-md mr-4`} >Login</button>

                                <p className='text-center'>Not Registered?<Link to='/signup' onClick={() => document.querySelector("#myModal").classList.add("hidden")} className='text-blue-600 hover:text-blue-800'>Signup</Link>
                                </p>
                                 
                            </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar