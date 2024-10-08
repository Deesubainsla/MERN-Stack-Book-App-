import React, { useContext } from 'react'
import { userContext } from '../context/AuthUserContext'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const userInfo = useContext(userContext);
    const navigate = useNavigate();
  return <>
    <div>
            <button
                onClick={() =>{
                    navigate('/');
                    userInfo.setuser(undefined);
                    localStorage.removeItem('User');
                    toast.success("Logout successfully")
                }}
                className=" dark:bg-red-600 text-white cursor-pointer hover:shadow-lg  transition duration-300 hover:scale-105 bg-red-600 rounded-md px-3 py-2  flex text-center justify-center">
                   Logout
            </button>
    </div>
  </>
}

export default Logout