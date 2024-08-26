import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import list from '../../public/list.json'
import Card from './Card'
import axios from 'axios'
import { userContext } from '../context/AuthUserContext'


function Books() {
    const { search } = useContext(userContext);
    // console.log(userInfo.search);
    const [list, setlist] = useState([])
    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await axios.get('/books');
                const filteredData = res.data.filter((book) => (
                    book.title.toLowerCase().includes(search.toLowerCase())
                ))
                setlist(filteredData);
            } catch (error) {
                console.log("Error in book fetching :", error)
            }
        }
        getdata();

    }, [search])



    return <>
        <div className='p-8 md:p-16'>
            <div className='flex  justify-center flex-col items-center my-4'>
                <h1 className='font-bold text-2xl '>Welcome on our Book <span className='text-red-600'>Shelf:)</span></h1>
                <p className='text-center py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut corrupti maiores placeat possimus expedita asperiores repellendus aspernatur, neque quidem earum soluta molestias quae modi nobis ad ea excepturi distinctio recusandae.</p>
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