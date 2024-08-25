import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function AddBook() {

    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmition = async (data) => {
        //by this following code for FormData we don't need to specify content-type
        //because axios auto convert it to multipart/form-data by seeing formdata

        // const formdata = new FormData();
        // formdata.append('file', data.file[0]); 
        // formdata.append('title', data.title); 
        // formdata.append('description', data.description); 
        // formdata.append('price', data.price); 
        // formdata.append('category', data.category); 

        // console.log(data);
        
        const formdata = {
            // file: data.file[0] ,//design for handle multiple input.So, returns a FileList always
            // file: imgpreview ,//using reader.readAsDataURL(fileimg) url is not recomended as it takes more storage in DB
            file: (data.file[0])?data.file[0] : imgpreview ,
            title: data.title,
            description: data.description,
            price: data.price,
            category: data.category
        }
        try {
            // console.log("Here are the files:")
            // console.log(data.files);
            await axios.post("http://localhost:3000/books/addbook", formdata
                , {
                    // header means additionla info from client to server here it is content-type:
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        // this content-type explains that file
                        // uploads are also there
                    },
                }
            )
                .then((res) => {
                    // console.log(res);
                    navigate('/books');
                    toast.success("New Book added successfully")
                })
        } catch (error) {
            toast.error(error?.response.data.message);
        }
    }

    // const [imgpreview, setimgpreview] = useState(null)
    const [imgpreview, setimgpreview] = useState('https://www.heritagechristiancollege.com/wp-content/uploads/2019/05/free-book-cover-design-templates-of-diy-book-covers-of-free-book-cover-design-templates.jpg')


    //used directly in register to prevent conflict after facing them:

    // const handleChange = (e)=>{
    //   console.log(e.target.files);
    //   const file = e.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       setimgpreview(reader.result);
    //       // setValue('file',file);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // console.log("I am in handleChang function:")
    // console.log(e);
    // }


    return <>
        <div className='h-full w-full'>
            <div id="myModal" className=" fixed  inset-0 z-40 backdrop-blur-sm bg-white/30 bg-opacity-50 flex justify-center ">
                <div className=" bg-white dark:bg-slate-900  relative top-[70px] rounded-lg px-6    rounded shadow-lg w-[90%] md:w-1/2 ">
                    {/* <div className="flex justify-end">
                        <button id="closeModalBtn" className="text-gray-500 hover:text-gray-800"
                            onClick={() => document.querySelector("#myModal").classList.add("hidden")}
                        >&times;</button>
                    </div> */}
                    <form onSubmit={handleSubmit(onSubmition)}>

                        {/* <button className="dark:text-white btn h-[50px] w-[50px] hover:bg-slate-200 dark:hover:bg-slate-800 btn-sm btn-circle btn-ghost absolute right-2 sm:right-6 top-2 sm:top-6" onClick={() => {
                            navigate('/');

                        }}>✕</button>
                        <h2 className="text-2xl font-bold text-red-600 mb-10">New Book</h2> */}

                        <div className='mb-5'>
                            <div className='w-full mb-2   h-[200px]  flex justify-center items-center'>
                                <img className='border-2 h-full  w-[200px] rounded-full' src={imgpreview} alt="uploadedimg" />
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
                                                setimgpreview(reader.result);
                                                // setValue('file',fileimg);
                                            };
                                            reader.readAsDataURL(fileimg);
                                        }
                                    }
                                })} />
                            {errors.file && <span className='text-red-600 text-sm'>This field is required:</span>}
                        </div>

                        <div className='mb-5'>
                            <span>Title:</span><br />
                            <input className='p-1 dark:text-black w-full outline-none rounded-md border-[2px]' type="text" placeholder="Enter Book's title" {...register("title", { required: true })} />
                            <br />
                            {errors.title && <span className='text-red-600 text-sm'>This field is required:</span>}

                        </div>
                        {/* <div className='mb-5'>
              <span>Image:</span><br />
              <input className='p-1 w-full dark:text-black outline-none rounded-md border-[2px]' type="text" placeholder='Paste Image url' {...register("image", { required: true })} />
              {errors.image && <span className='text-red-600 text-sm'>This field is required:</span>}
            </div> */}

                        <div className='mb-5'>
                            <span>Description:</span><br />
                            <input className='p-1 dark:text-black w-full outline-none rounded-md border-[2px]' type="text" placeholder='Enter your description' {...register("description", {
                                required: {
                                    //custom message condition:
                                    value: true,
                                    message: "This field is required:"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Atleast 10 letters:"
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


                        <div className='flex justify-center mb-2 items-center '>
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

export default AddBook