import React, { useContext } from 'react'
import { userContext } from '../context/AuthUserContext.jsx'
import toast from 'react-hot-toast';
import axios from 'axios';


function Card({card}) {
    const userInfo = useContext(userContext);
   
    const addtokart = async(bookid, userid)=>{
        // console.log(user);
        // if(!user){
        //     return toast.error("Login compulsory");
        // }
        
        userInfo.setcartcount(prev=> prev+1);
        // console.log(userInfo.cartcount);
        const info = {
            userid,
            bookid
        }
        try {
            await axios.post('/addtokart',info)
            .then((res)=>{
                toast.success(res.data.message);
            })
        } catch (error) {
            toast.error(error?.response.data.message);
        }
    }

    const handlewikipedia = ()=>{
        if(userInfo.user) window.open(`${card.url}`,'_blank');
        else toast.error("Login is compulsory to access Books")
        
    }

    return <>
        <div>
            <div  className="border  card bg-base-100 w-64 mx-auto  transition duration-300 ease-in-out   hover:shadow-2xl  shadow-lg ">
                <figure >
                    <img className='object-fill duration-[400ms] transition ease-in-out  hover:scale-110  w-full h-[350px]'
                        src={card.image}
                        alt="book image" />
                        
                </figure>
                
                <div className="card-body p-4">
                    <h2 onClick={handlewikipedia}  
                    
                    //truncate to append ... if text overflow:
                    className="truncate font-[600] text-xl cursor-pointer hover:text-red-600"
                    
                    >
                    {card.title}
                        {/* <div className="badge bg-red-600 text-white badge-secondary">{card.category}</div> */}
                    </h2>
                    {/* <p className='justify-center flex items-center mb-3 h-[80px] overflow-auto'>{card.description}</p> */}
                    <div className="card-actions justify-between">
                        <div className="hover:cursor-pointer transition transform duration-300  hover:scale-110 hover:shadow-lg bg-red-600 text-white badge badge-outline">{
                                //for javaScript:
                                (card.category=="Free")?'Free': 
                                    <div className='w-fit'>${card.price}</div> 
                            }</div>
                        <div onClick={()=>{
                            userInfo.user ? addtokart(card._id, userInfo.user._id) :toast.error("Login compulsory");
                        }}  className="hover:cursor-pointer transition transform duration-300 hover:shadow-lg hover:scale-110 bg-red-600 text-white badge badge-outline">Add+</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card