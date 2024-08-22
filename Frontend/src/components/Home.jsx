import React from 'react'
import homeimage from "../../public/homeimage.png"
import FreeBooks from './FreeBooks'

function Home() {
    return <>
    <div className='px-8 md:px-16 '>

        <div className='lg:flex mb-11'>

            <div className=" lg:hidden  " >
                
                <img className="object-cover w-full h-full" src={homeimage} alt="booksimage" />
            </div>

            <div className='lg:w-1/2  h-auto'>

                <h1 className='text-3xl font-bold lg:mt-32 '>Hello, Welcome here to learn
                    <br />something, <span className='text-red-600'>new everyday!!!</span>
                </h1>

                <p className='text-lg leading-relaxed my-12 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum totam veniam eaque nam nemo deserunt!!
                </p>

                <div className='pr-12'>
                    <label class=" border px-2 py-1 border-gray-300 rounded-md flex items-center gap-2">
                      
                       <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="outline-none bg-base-200 grow" placeholder="Feedback" />
                        
                    </label>
                </div>
                {/* <input class="mt-10 outline-none focus:ring  focus:ring-blue-500" type="text" placeholder="Focus me to see ring" /> */}
                
                <div>
                    <a className="bg-red-600 my-2 cursor-pointer hover:shadow-xl duration-200 hover:scale-105  text-white inline-block  rounded-md px-2 py-1">send Feedback</a>
                </div>
                
                
                

            </div>

            <div className=" dark:bg-slate-900 lg:w-1/2 hidden lg:flex  overflow-hidden" >
                
                <img className="  h-full w-full" src={homeimage} alt="booksimage" />
            </div>
            
        </div>

        <FreeBooks/>


    </div>    
    </>
}

export default Home