import React from 'react'
import { mealData } from '../Data/Meal'

function OurFood() {
  return (
    <>
    <div className=' w-[90%] mx-auto mt-[100px]'>
      
      <div>
        <h2 className=' text-center text-[#7D0A0A] text-3xl font-bold py-5'>
            Our Food
        </h2>
      </div>

      <div className=' grid md:grid-cols-3 sm:grid-cols-1 py-6 gap-2'>
        {mealData.map((meal)=>
            (
              <div className=' flex justify-center flex-col items-center'>
                <div>
                    <img src={meal.img} alt="" className=' w-[250px] h-[200px] rounded-lg object-cover' />
                    </div>
                <div>
                    <p className='text-xl font-semibold uppercase'>{meal.title}</p>
                    <p>{meal.price}</p>
                    <button className=' bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px]
                     hover:bg-[#7D0A0A] font-semibold'
                    >Add to cart</button>
                </div>
              </div>
            ))
        }
      </div>
    </div>
    </>
  )
}

export default OurFood
