import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { userContext } from '../context/AuthUserContext.jsx'

function Signup() {
    const userInformation = useContext(userContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmition = (data) =>{
        const userInfo = {
            file: (data.file[0]? data.file[0]: profile) ,
            name: data.name,
            email: data.email,
            password: data.password
        };
        const signin = (async()=>{
            try {
                await axios
                .post("/user/signin",userInfo,{
                    headers:{
                       'Content-Type': 'multipart/form-data'
                    }//imp for multer to know for upload fields
                    //it is auto set in case of axios for formdata:
                })
                .then((res)=>{
                     localStorage.setItem('User', JSON.stringify(res.data.user))
                     userInformation.setuser(res.data.user);
                     toast.success(`Welcome ${res.data.user.name}`)
                     navigate('/books');
                    })

            } catch (error) {
                toast.error(error?.response.data.message);
            }
        })();
       
    }

    const [profile, setprofile] = useState('https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png')
    //to use navigate directly we have to use useNavigate() hook given by react-router-dom
    
    return <>
        <div>
            <div id="myModal" className=" fixed  inset-0 backdrop-blur-sm bg-white/30 bg-opacity-50 flex  z-10 justify-center ">
                <div className=" bg-white h-fit dark:bg-slate-900 relative top-[72px] rounded-lg py-4 px-6 shadow-lg w-[90%] md:w-1/2  ">
                    {/* <div className="flex justify-end">
                        <button id="closeModalBtn" className="text-gray-500 hover:text-gray-800"
                        onClick={()=>document.querySelector("#myModal").classList.add("hidden")}
                        >&times;</button>
                    </div> */}
                    <form onSubmit={handleSubmit(onSubmition)}>

                        {/* <button className="dark:text-white btn h-[50px] w-[50px] hover:bg-slate-200 dark:hover:bg-slate-800 btn-sm btn-circle btn-ghost absolute right-2 sm:right-6 top-2 sm:top-6" onClick={() => {
                            navigate('/');

                        }}>✕</button>
                        <h2 className="text-2xl font-bold text-red-600 mb-10">Signup</h2> */}


                        <div className='mb-5'>
                            <div className='w-full mb-2   h-[200px]  flex justify-center items-center'>
                                <img className='border-2 h-full  w-[200px] rounded-full' src={profile} alt="uploadedimg" />
                            </div>
                            <input type="file"
                                //use multiple for select more then one file:
                                //onChange={handleChange} //incountered issue due to react-hool-form
                                {...register('file', {
                                    // required: true,
                                    //Solved by introduce the event in register:

                                    onChange: (e) => {

                                        // console.log("e.target.files ",e.target.files);
                                        const fileimg = e.target.files[0];
                                        if (fileimg) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setprofile(reader.result);
                                                // setValue('file',fileimg);
                                            };
                                            reader.readAsDataURL(fileimg);
                                        }
                                    }
                                })} />
                            {errors.file && <span className='text-red-600 text-sm'>This field is required:</span>}
                        </div>

                        <div className='mb-5'>
                            <span>Name:</span><br />
                            <input className='p-1 w-full dark:text-black outline-none rounded-md border-[2px]' type="text" placeholder='Enter your Name' {...register("name", { required: true })} />
                            <br />
                            {errors.name && <span className='text-red-600 text-sm'>This field is required:</span>}

                        </div>
                        <div className='mb-5'>
                            <span>Email:</span><br />
                            <input className='p-1 w-full dark:text-black outline-none rounded-md border-[2px]' type="email" placeholder='Enter your Email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-600 text-sm'>This field is required:</span>}
                        </div>
                        <div className='mb-5'>
                            <span>Password:</span><br />
                            <input className='p-1 dark:text-black w-full outline-none rounded-md border-[2px]' type="password" placeholder='Enter your Password' {...register("password", {
                                required: {
                                    //custom message condition:
                                    value: true,
                                    message: "This field is required:"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Minimum 8 letters:"
                                }
                            })} />
                            {errors.password && <span className='text-red-600 text-sm'>{errors.password.message}</span>}
                        </div>


                        <div className='flex justify-center mb-2 items-center '>
                            <button type='submit' className={`bg-red-600 h-fit px-2 duration-300 py-1 text-white hover:scale-110 rounded-md mr-4`} >Signup</button>
                        </div>
                        <div className='flex justify-center '>
                            {/* <button className={`bg-red-600 hidden sm:block h-fit px-2 duration-300 py-1 text-white hover:scale-110 rounded-md mr-4`} >Signup</button> */}

                            <p className='text-center'>Have Account?
                                <Link to='/'
                                onClick={() => document.querySelector("#myModal").classList.remove("hidden")} className='text-blue-600 hover:text-blue-800'>Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    </>
}

export default Signup