import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import list from '../../public/list.json'
import Card from './Card'
import axios from 'axios'
import { userContext } from '../context/AuthUserContext'


function Books() {
    const userInfo = useContext(userContext);
    // console.log(userInfo.search);
    const [list, setlist] = useState([])
    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await axios.get('/books');
                const filteredData = res.data.filter((book) => (
                    book.title.toLowerCase().includes(userInfo.search.toLowerCase())
                ))
                setlist(filteredData);
            } catch (error) {
                console.log("Error in book fetching :", error)
            }
        }
        getdata();

    }, [userInfo.search])



    return <>
        <div className='p-8 md:p-16'>
            <div className='flex  justify-center flex-col items-center my-4'>
                <h1 className='font-bold text-2xl '>Welcome on our Book <span className='text-red-600'>Shelf:)</span></h1>
                <p className='text-center py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut corrupti maiores placeat possimus expedita asperiores repellendus aspernatur, neque quidem earum soluta molestias quae modi nobis ad ea excepturi distinctio recusandae.</p>

                <div className='md:hidden mt-2 w-[90%] sm:w-[70%] px-2'>
                        <label className="border border-gray-300 px-2 py-1 rounded-md flex items-center gap-2">
                            <input onChange={(e)=>userInfo.setsearch(e.target.value)} type="text" className="bg-transparent w-full outline-none  " placeholder="Search" />
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
            </div>

            {list.length == 0 ? <div className='flex justify-center text-balance font-bold '>No Match Found...</div> :

                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 justify-items-center'>
                    {list.map((item) => (
                        <div className='w-fit' key={item.id}>
                            <Card card={item} />
                        </div>
                    ))}
                </div>

            }


        </div>
    </>
}

export default Books