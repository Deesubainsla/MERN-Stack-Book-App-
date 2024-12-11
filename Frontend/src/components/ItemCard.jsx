import React, { useContext } from 'react'
import { userContext } from '../context/AuthUserContext.jsx'
import axios from 'axios';
import toast from 'react-hot-toast';

function ItemCard({book}) {
    const userInfo = useContext(userContext);
    const handleremove = async()=>{
        
        const info = {
            usermail: userInfo.user.email,
            bookid: book._id
        }
        try {
            await axios.post('/addtokart/removeitem',info)
            .then((res)=>{
                userInfo.setcartcount(prev=> prev-1);
                toast.success(res.data.message);
            })

        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return <>
        {/* <div className='bg-white rounded overflow-hidden my-1 dark:text-black  p-1 h-[60px] flex '>
            <div className='flex-shrink-0 w-[30%] lg:w-[25%] '>
                <img className='h-full w-full' src={book.image} alt="bookimg" />
            </div>
            <div className=' w-full flex flex-col px-1'>
                <div className='truncate font-semibold '>{book.title}</div>
                <div className='flex justify-between'>
                    <div>${book.price}</div>
                    <button onClick={handleremove} className='text-[10px] bg-red-600 px-1 text-white rounded '>remove</button>
                </div>
            </div>
        </div> */}
        <div className='bg-white rounded w-full overflow-hidden my-1 dark:text-black p-1 h-[60px] flex'>
      <div className=' w-[30%] lg:w-[25%]'>
        <img className='h-full w-full' src={book.image} alt="bookimg" />
      </div>
      <div className='flex w-full overflow-hidden flex-col px-1'>
        <div className='font-semibold w-full truncate'>
          {book.title}
        </div>
        <div className='flex justify-between items-center'>
          <div>${book.price}</div>
          <button onClick={handleremove} className='text-[10px] bg-red-600 px-1 text-white rounded'>
            remove
          </button>
        </div>
      </div>
    </div>
    </>
}

export default ItemCard