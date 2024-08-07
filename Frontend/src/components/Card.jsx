import React from 'react'

function Card({card}) {
    return <>
        <div className=''>
            <div className="dark:border card bg-base-100 w-64 mx-auto  transition duration-300 ease-in-out hover:scale-[1.03]  hover:shadow-2xl  shadow-lg ">
                <figure>
                    <img className='object-fill  w-full h-[350px]'
                        src={card.image}
                        alt="Shoes" />
                        
                </figure>
                <div className="card-body p-5">
                    <h2 className="card-title">
                        {card.tittle}
                        <div className="badge bg-red-600 text-white badge-secondary">{card.category}</div>
                    </h2>
                    <p className='mb-3'>{card.description}</p>
                    <div className="card-actions justify-between">
                        <div className="hover:cursor-pointer transition transform duration-300  hover:scale-110 hover:shadow-lg hover:bg-red-600 hover:text-white badge badge-outline">Reviews</div>
                        <div className="hover:cursor-pointer transition transform duration-300 hover:shadow-lg hover:scale-110  hover:bg-red-600 hover:text-white badge badge-outline">Read</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card