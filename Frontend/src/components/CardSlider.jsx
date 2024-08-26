import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Card from './Card';
import list1 from "../../public/list.json"
import axios from 'axios';

function CardSlider({ cards }) {
    const [list, setlist] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        //it is a IIFE(immediately invoked function expression) run automatic without call them explicitly.
      (async()=>{
       try {
            const res = await axios.get('/books');
            //(list.length) for finding length and know if the array is empty: 
            setlist(res.data.filter((item) => item.category === 'Free'));
            setloading(false);
       } catch (error) {
            console.log('Error: ', error?.message);
       }
      })();
      
    }, [])
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    // if(loading){
    //     return <div>Loading...</div>
    // }

    return <>
        {/* this code will show the list after setlist will implement */}
        {loading? 'Loading...': <div className="slider-container">
            <Slider {...settings}>

                {list.map((item) => (
                    <div key={item._id} className='px-auto'>
                        <Card card={item} />
                    </div>
                ))}

            </Slider>
        </div> }
        
    </>
}

export default CardSlider