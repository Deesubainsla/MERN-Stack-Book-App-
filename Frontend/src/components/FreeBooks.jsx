import React from 'react'
import Card from './Card'
import CardSlider from './CardSlider.jsx'
import list from "../../public/list.json"

function FreeBooks() {

    const freelist = list.filter((card) => card.category === "Free")
    

    return <>
        <div className='mb-12'>
        
            <div className='mb-11'>
                <h1 className='text-lg my-3 font-semibold'>Free Books suggested for you:</h1>
                <p className='text-lg leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam! Cumque placeat adipisci inventore iusto ad consectetur iste ab asperiores!!!</p>
            </div>

            
                <div className=''>
                    <CardSlider cards={freelist} />
                </div>
            



        </div>
    </>
}

export default FreeBooks