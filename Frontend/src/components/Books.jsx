import React from 'react'
import {Link}  from 'react-router-dom'

function Books() {
    return <>
        <div>
            
            <button id="openModalBtn" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>document.querySelector("#myModal").classList.remove("hidden")}
                >Open Modal</button>

            
            <div id="myModal" className="hidden fixed  inset-0 bg-slate-300 bg-opacity-50 flex items-center justify-center ">
                <div className=" bg-white  relative rounded-lg   p-8 rounded shadow-lg w-1/3">
                    {/* <div className="flex justify-end">
                        <button id="closeModalBtn" className="text-gray-500 hover:text-gray-800"
                        onClick={()=>document.querySelector("#myModal").classList.add("hidden")}
                        >&times;</button>
                    </div> */}
                    <button className="btn h-[50px] w-[50px] hover:bg-slate-200 btn-sm btn-circle btn-ghost absolute right-2 sm:right-6 top-2 sm:top-6" onClick={()=>document.querySelector("#myModal").classList.add("hidden")}>✕</button>
                    <h2 className="text-2xl font-bold text-red-600 mb-10">Login</h2>
                    <div className='mb-5'>
                        <span>Email:</span><br />
                        <input className='p-1 w-full outline-none rounded-md border-[2px]' type="email" placeholder='Enter your Email' />
                    </div>
                    <div className='mb-5'>
                        <span>Password:</span><br />
                        <input className='p-1 w-full outline-none rounded-md border-[2px]' type="email" placeholder='Enter your Password' />
                    </div>
                    <div className='flex justify-center mb-2 items-center sm:hidden'>
                        <button className={`bg-red-600 h-fit px-2 duration-300 py-1 text-white hover:scale-110 rounded-md mr-4`} >Login</button>
                    </div>
                    <div className='flex justify-center sm:justify-between'>
                        <button className={`bg-red-600 hidden sm:block h-fit px-2 duration-300 py-1 text-white hover:scale-110 rounded-md mr-4`} >Login</button>
                        
                        <p className='text-center'>Not Registered?<Link to='/signup' className='text-blue-600 hover:text-blue-800'>Signup</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Books