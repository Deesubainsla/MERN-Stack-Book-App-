import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors}} = useForm();
  const onSubmition = async(data)=>{
      try {
        await axios.post("http://localhost:3000/books/addbook",data)
        .then((res)=>{
          navigate('/books');
          toast.success("New Book added successfully")
        })
      } catch (error) {
        toast.error(error?.response.data.message);
      }
  }

  return <>
    <div className='h-full w-full'>
      <div id="myModal" className=" fixed  inset-0 backdrop-blur-sm bg-white/30 bg-opacity-50 flex items-center justify-center ">
        <div className=" bg-white dark:bg-slate-900  relative rounded-lg   p-8 rounded shadow-lg w-[90%] md:w-1/2 ">
          {/* <div className="flex justify-end">
                        <button id="closeModalBtn" className="text-gray-500 hover:text-gray-800"
                        onClick={()=>document.querySelector("#myModal").classList.add("hidden")}
                        >&times;</button>
                    </div> */}
          <form onSubmit={handleSubmit(onSubmition)}>
            <button className="dark:text-white btn h-[50px] w-[50px] hover:bg-slate-200 dark:hover:bg-slate-800 btn-sm btn-circle btn-ghost absolute right-2 sm:right-6 top-2 sm:top-6" onClick={() => {
              navigate('/');

            }}>✕</button>
            <h2 className="text-2xl font-bold text-red-600 mb-10">New Book</h2>
            <div className='mb-5'>
              <span>Title:</span><br />
              <input className='p-1 dark:text-black w-full outline-none rounded-md border-[2px]' type="text" placeholder="Enter Book's title" {...register("title",{required:true})}/>
              <br />
              {errors.title && <span className='text-red-600 text-sm'>This field is required:</span>}

            </div>
            <div className='mb-5'>
              <span>Image:</span><br />
              <input className='p-1 w-full dark:text-black outline-none rounded-md border-[2px]' type="text" placeholder='Paste Image url' {...register("image", { required: true })} />
              {errors.image && <span className='text-red-600 text-sm'>This field is required:</span>}
            </div>

            <div className='mb-5'>
              <span>Description:</span><br />
              <input className='p-1 dark:text-black w-full outline-none rounded-md border-[2px]' type="text" placeholder='Enter your description' {...register("description", {
                required: {
                  //custom message condition:
                  value: true,
                  message: "This field is required:"
                },
                minLength: {
                  value: 50,
                  message: "Atleast 50 letters:"
                }
              })} />
              {errors.description && <span className='text-red-600 text-sm'>{errors.description.message}</span>}
            </div>

            <div className='mb-5'>
              <span>Price:</span><br />
              <input className='p-1 w-full dark:text-black outline-none rounded-md border-[2px]' type="text" placeholder='Enter Price' {...register("price", { required: true })} />
              {errors.price && <span className='text-red-600 text-sm'>This field is required:</span>}
            </div>

            <div className='mb-5'>
              <span>Category:</span><br />
              <input className='p-1 w-full dark:text-black outline-none rounded-md border-[2px]' type="text" placeholder='Mention Category' {...register("category", { required: true })} />
              {errors.category && <span className='text-red-600 text-sm'>This field is required:</span>}
            </div>


            <div  className='flex justify-center mb-2 items-center '>
              <button type='submit' className={`bg-red-600 h-fit px-2 duration-300 py-1 text-white hover:scale-110 rounded-md mr-4`} >add Book</button>
            </div>
            {/* <div className='flex justify-center '> */}
              {/* <button className={`bg-red-600 hidden sm:block h-fit px-2 duration-300 py-1 text-white hover:scale-110 rounded-md mr-4`} >Signup</button> */}

              {/* <p className='text-center'>Have Account?<Link to='/'
                onClick={() => document.querySelector("#myModal").classList.remove("hidden")} className='text-blue-600 hover:text-blue-800'>Login</Link>
              </p>
            </div> */}

          </form>
        </div>
      </div>
    </div>
  </>
}

export default About