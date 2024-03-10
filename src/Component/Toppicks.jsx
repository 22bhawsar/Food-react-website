import React from 'react'
import { topPicks } from '../Data/data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Toppicks({handleAdd}) {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className=' w-[90%] mx-auto'>
        <h2 className=' font-bold text-3xl pl-10'>What's On Your Mind ?</h2>
      <div  className=' py-20'>
      <Slider {...settings}>
      {
          topPicks.map((item)=>(
            <div className=' bg-[white] rounded-md' key={item.id}>
                <div className=' flex justify-center items-center rounded-t-xl' >
                  <img src={item.img} alt="" className=' w-[250px] object-cover'/>
                </div>

                <div className=' flex flex-col justify-center items-center gap-2 p-4'>
                    <p className=' text-xl font-semibold uppercase'>{item.price}</p>
                    <button className=' bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] hover:bg-[#7D0A0A]'
                    onClick={handleAdd}>
                      Add to cart</button>
                </div>
            </div>
        ))   
      }
      </Slider>

      </div>

    </div>
  )
}

export default Toppicks
