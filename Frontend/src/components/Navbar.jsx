import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form"
import {ItemCard} from './index.js';

import axios from 'axios';
import { toast } from 'react-hot-toast'
import { Logout } from './index.js'
import { userContext } from '../context/AuthUserContext.jsx';


function Navbar() {
    // window.addEventListener('click',(e)=>{
    //     console.log('Page ',e.pageX,' ',e.pageY );
    // })//for understanding only:


    const userInfo = useContext(userContext);
    const [cartbooks, setcartbooks] = useState([]);

    
    
    
    
    useEffect(() => {
        (async()=>{
            const info = {
                usermail: userInfo.user.email
            }
            const res = await axios.post('/addtokart/getcartitems',info);
            userInfo.setcartcount(res.data.length);
            setcartbooks(res.data);
            // console.log('cartcount is here: ',userInfo.cartcount);
            // console.log('bookslength is here: ',res.data.length);
            // console.log(books, 'length: ',books.length);
        })();
    }, [userInfo.cartcount, userInfo.user])
    
    
    
    //can write like this also:
    // const {setuser} = useContext(userContext);
    

    
    //working onetime only at starting:
    //to show modal of login after 10s if user doesnot 
    // useEffect(() => {
    //     if (!userInfo.user) {
    //         console.log("in if statement:")
    //         setTimeout(() => {

    //             document.querySelector("#myModal").classList.remove("hidden");
    //         }, 10000);
    //     }
    // }, [])

    //IIFE //problem re-render everytime when component re-render:
    // (()=>{
    // // const {user} = useContext(userContext);
    // console.log("new function working:")
    // if(!userInfo.user){
    //     console.log("in if statement:")
    //     setTimeout(() => {

    //     document.querySelector("#myModal").classList.remove("hidden");
    //     }, 10000);
    // }
    // })();

    // const [isMenu, setisMenu] = useState(false);

    // const[darkMode, setdarkMode] = useState(localStorage.getItem('darkMode')?localStorage.getItem('darkMode'): false);
    const [darkMode, setdarkMode] = useState(false);

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
        if (darkMode) {
            document.documentElement.classList.add('dark');
            // document.body.classList.add('dark');
            console.log("i am in if ")
            // localStorage.setItem('darkMode',true);
        } else {
            document.documentElement.classList.remove('dark');
            // document.body.classList.remove('dark');
            console.log("i am in if ")
            // localStorage.setItem('darkMode',false);
        }
        console.log(darkMode)
    }, [darkMode])

    const [scrolled, setScrolled] = useState(false);
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
        <label className=" swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onClick={() => setdarkMode(!darkMode)} type="checkbox" className="theme-controller" value="synthwave" />

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
    
    const [navshow, setnavshow] = useState('translate-y-[-150%]')

    const closenav = ()=>{
        document.querySelector("ion-icon").name = 'menu';
        setnavshow('translate-y-[-150%]');
    }

    const [cart, setcart] = useState('translate-x-[200%]');
    const handleCart = ()=>{
        // userInfo.setcartcount(0);
        const items = document.querySelector('#cartitem');
        cart == 'translate-x-[200%]'? setcart('translate-x-[0%]'): setcart('translate-x-[200%]');
    }
    
    const handleClick = (e) => {
        const nav = document.querySelector(".phone-nav");
        let opennav = nav.classList.contains('translate-y-[0%]');
        if (!opennav) {
            e.target.name = 'close';
            setnavshow('translate-y-[0%]');
            // nav.classList.replace('top-[-100%]','top-[9%]');
        }
        else {
            e.target.name = 'menu';
            setnavshow('translate-y-[-150%]')
            // nav.classList.replace('top-[9%]','top-[-100%]');
        }

        // e.target.name = (e.target.name == 'menu' && (!opennav)) ? 'close' : 'menu';
        // nav.classList.toggle('top-[64px]');
    }

    return (

        <div className={`px-8 md:px-16   dark:text-white transition duration-300 sticky z-50 top-0 left-0 right-0  ${scrolled ? 'bg-gray-200 dark:bg-gray-800  shadow-md ' : 'bg-white dark:bg-slate-900'} `}>


            <div className={`p-0 navbar ${scrolled ? 'bg-gray-200 dark:bg-gray-800' : 'bg-white dark:bg-slate-900'}`} >
                <div className="navbar-start">
                    <div className="dropdown lg:hidden" >
                        {/* onClick={() => setisMenu(!isMenu)} */}
                        <div>

                            <div>
                                <button className='text-2xl flex items-center justify-center'>
                                    <ion-icon onClick={handleClick} name="menu"></ion-icon>
                                </button>
                            </div>

                            <div className={`transition  py-2 phone-nav w-full duration-1000  left-[0] top-[64px] ${navshow} -z-10  fixed ${scrolled ? "dark:bg-gray-800 bg-gray-200" : "bg-white dark:bg-slate-900 "}   `} >

                                <hr className='bg-red-600 w-[85%]  h-1 rounded mx-auto mb-2' />

                                {/* <div className='pl-8 md:pl-16'> */}
                                <div className=''>

                                    <div
                                        className="flex flex-col gap-2">

                                        
                                        <div className='flex justify-center items-center my-1'><NavLink  onClick={closenav} to='/profile' 
                                        className={({isActive})=>(

                                            //if you use {} return something is compulsory. So, use () or nothing instead. 

                                            `transform p-0 mx-1 rounded-full transition duration-300  ease-in-out hover:scale-110 ${isActive ? "ring-2 ring-red-600" :""}  `
                                        )}
                                        >
        
                                        <img className='h-[100px] w-[100px] rounded-full m-1' src={userInfo.user.profile} alt="profileimg" />
        
                                        </NavLink></div>
                                        
                                            
                                        <div className='flex justify-center items-center'><NavLink onClick={closenav} to='/' className="inline-block transform transition duration-300  ease-in-out hover:scale-110  hover:text-red-600"
                                            style={({ isActive }) =>
                                                isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                            }>Home</NavLink></div>

                                        <div className='flex justify-center items-center'><NavLink onClick={()=>{closenav();}} to='/books' className="inline-block transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                            style={({ isActive }) =>
                                                isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                            }>Books</NavLink></div>

                                        
                                        <div className='flex justify-center items-center'><NavLink onClick={closenav} to='/addbook' className="inline-block transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                            style={({ isActive }) =>
                                                isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                            }>AddBook</NavLink></div>
                                       

                                        <div className='flex justify-center items-center'><NavLink onClick={closenav} to='/users' className="inline-block transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                            style={({ isActive }) =>
                                                isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                            }>Users</NavLink></div>
                                       
                                            
                                    </div>
                                    {/* <hr className='absolute bottom-1' /> */}
                                </div>
                                
                                <hr className='bg-red-600 w-[85%]  h-1 rounded mx-auto mt-2' />

                            </div>
                        </div>
                    </div>
                    <Link to='/' className="btn ml-1  underline lg:ml-0 btn-ghost text-2xl  p-0 transform  transition ease-in-out  duration-300 text-red-600 hover:scale-110  ">MyBook</Link>

                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal">
                            <li><NavLink to='/' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Home</NavLink></li>
                            <li><NavLink  to='/books' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Books</NavLink></li>

                           
                            
                                <li><NavLink to='/addbook' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                    style={({ isActive }) =>
                                        isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                    }>AddBook</NavLink></li>
                            


                            <li><NavLink to='/users' className="transform transition duration-300  ease-in-out hover:scale-110 hover:text-red-600"
                                style={({ isActive }) =>
                                    isActive ? { color: '#dc2626', textDecoration: 'underline' } : {}
                                }>Users</NavLink></li>

                              
                                    <li><NavLink to='/profile' 
                                    // className={({isActive})=>{
                                    //     `transform ${isActive?"ring-2 ring-red-600":""} p-0 mx-1 transition duration-300  ease-in-out hover:scale-110 hover:text-red-600`
                                    // }}
                                    className={({ isActive }) =>
                                        `transform p-0 mx-1 rounded-full transition duration-300  ease-in-out hover:scale-110 ${isActive ? "border-2  border-red-600" : ""}`
                                    }
                                    // style={({ isActive }) =>
                                    //     isActive ? { ring: '#dc2626', textDecoration: 'underline' } : {}
                                    // }
                                    >
    
                                    <img className='h-[36px]  w-[36px] rounded-full ' src={userInfo.user.profile} alt="profileimg" />
    
                                    </NavLink></li>
                                
                            
                        </ul>
                    </div>
                    <div className='hidden md:block px-2'>
                        <label className="border border-gray-300 px-2 py-1 rounded-md flex items-center gap-2">
                            <input onChange={(e)=>userInfo.setsearch(e.target.value)} type="text" className="bg-transparent  outline-none  " placeholder="Search" />
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

                    <button className='flex  justify-center items-center border-gray-300 rounded-full p-0.5 mr-1 '

                    >
                        {darkmodeToggleButton}
                    </button>
                    
                    {/* if user is present then only the cart will render */}
                    {userInfo.user &&   <div className='relative mr-3 ml-1'>
                        <div onClick={handleCart} className=' flex items-center justify-center'>
                            <ion-icon size='large' name="cart"></ion-icon>

                            {userInfo.cartcount>0 && 
                                <span className={`top-[-10%] right-[-10%] rounded-full absolute  text-white flex justify-center items-center p-2 text-sm bg-red-600 h-[15px] w-[15px]`}>{userInfo.cartcount}</span>
                            }
                            
                        </div>

                        <div id='cartitem' className={`fixed  rounded ${cart} duration-1000   bg-red-200 right-[32px] top-[64px] md:right-[64px] w-[40%]  lg:w-[25%] pt-1 pb-6 px-2 `}>

                            {cartbooks.length>0? 
                                    cartbooks.map((book)=>(
                                        <div className='w-full' key={book._id}>
                                            <ItemCard book={book} />
                                        </div>
                                   ))
                            : <div>No item present</div> }
                            
                           
                        </div>

                    </div>
                    }

                    <div>
                       <Logout />
                    </div>
                    
                </div>


            </div>
        </div>

        


    )
}

export default Navbar