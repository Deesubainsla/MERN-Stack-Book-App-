import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Users() {

  const Usercard = ({ user }) => {

    return (
    //   <div className='bg-white w-[80%]  md:w-[50%] xl:w-[30%] rounded-xl shadow-lg  my-1 dark:text-black  p-2  flex '>
    //   <div className=' overflow-hidden w-[97px] h-[97px] rounded-full '>
    //     <img className='object-cover h-full w-full' src={user.profile} alt="bookimg" />
    //   </div>
    //   <div className=' w-full h-full flex justify-center items-center'>
    //     <span className='font-semibold'>{user.name}</span>
    //   </div>
    // </div>
    <div className='bg-white dark:bg-slate-900 dark:text-white w-[70%] md:w-[50%] border lg:w-[40%]  xl:w-[30%] rounded-full shadow-lg my-1 p-2 flex'>
  <div className='overflow-hidden flex-shrink-0  w-[97px] h-[97px] rounded-full'>
    <img className='object-cover h-full w-full' src={user.profile} alt="bookimg" />
  </div>
  <div className='h-[full] w-full flex justify-center items-center'>
    <div className='text-2xl w-[80%] font-semibold'>{user.name}</div>
  </div>
</div>
    );
    

  }

  const [userlist, setuserlist] = useState([]);
  useEffect(() => {
    (async () => {

      try {

        await axios.get('/user/getusers')
          .then((res) => {
            console.log(res.data);
            setuserlist(res.data);
          })

      } catch (error) {
        console.log(error.response.data.message);
      }

    })();
  }, [])


  return <>

      <div className='py-8 flex flex-col items-center'>
            {userlist.length==0? <span className='text-xl font-semibold'>Loading...</span> : 
              userlist.map((useritem)=>(
                
                    <Usercard key={useritem._id} user={useritem} />
               
              ))
            }
      </div>

  </>
}

export default Users