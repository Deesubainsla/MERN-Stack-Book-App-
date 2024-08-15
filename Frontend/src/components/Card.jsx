import React from 'react'

function Card({card}) {
    return <>
        <div className=''>
            <div className="border card bg-base-100 w-64 mx-auto  transition duration-300 ease-in-out   hover:shadow-2xl  shadow-lg ">
                <figure >
                    <img className='object-fill duration-[400ms] transition ease-in-out  hover:scale-110  w-full h-[350px]'
                        src={card.image}
                        alt="book image" />
                        
                </figure>
                <div className="card-body p-5">
                    <h2 className="card-title h-[56px] flex justify-between">
                        {card.title}
                        <div className="badge bg-red-600 text-white badge-secondary">{card.category}</div>
                    </h2>
                    <p className='justify-center flex items-center mb-3 h-[80px] overflow-auto'>{card.description}</p>
                    <div className="card-actions justify-between">
                        <div className="hover:cursor-pointer transition transform duration-300  hover:scale-110 hover:shadow-lg bg-red-600 text-white badge badge-outline">Reviews</div>
                        <div className="hover:cursor-pointer ring-1 ring-black transition transform duration-300 hover:shadow-lg hover:scale-110 bg-red-600 text-white badge badge-outline">{card.price}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card