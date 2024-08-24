import React, { useState, useEffect } from 'react'
import CardSlider from './CardSlider.jsx'
import axios from 'axios'

function FreeBooks() {

    const [freelist, setfreelist] = useState([])
    useEffect(() => {
      const getdata = async()=>{
       try {
         await axios.get('http://localhost:3000/books')
         .then((res)=>{
             const free = res.data.filter((card) => card.category === "Free");
             setfreelist(free);
         })
       } catch (error) {
            console.log("Error freelist: ",error.message);
       }
      }
      getdata();
    }, [])
    

    
    

    return <>
        <div className='mb-12'>
        
            <div className='mb-11'>
                <h1 className='text-xl my-3 font-semibold'>Free Books suggested for you:</h1>
                <p className='text-lg leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam! Cumque placeat adipisci inventore iusto ad consectetur iste ab asperiores!!!</p>
            </div>

            
                <div className=''>
                    <CardSlider cards={freelist} />
                </div>
            



        </div>
    </>
}

export default FreeBooks