import React from 'react'
import delivery from '../Assests/delivery.png'
function Delivery() {
  return (
    <div className=' w-full py-16 px-4 '>
       
       <h3 className='text-[#7D0A0A]  font-bold text-3xl text-center'>Quick Delivery App</h3>

       <div className=' grid grid-cols-2 w-[90%] mx-auto my-10'>
        <img src= {delivery} className='w-[480px]' />

        <div className=' flex flex-col justify-center'>
           <p className=' font-bold text-[#7D0A0A] text-[20px] md:text-[40px]'>Get the App</p>
            <h2 className='  sm:text-2xl md:text-3xl lg:text-4xl py-2 font-bold'>The Fastest food Delivery in India</h2>
            <button className=' bg-black  sm:w-[100px] md:w-[200px] text-white rounded-md my-6 py-[15px] sm:text-[10px] md:text-[20px] hover:bg-[#7D0A0A]'
            >Get started</button>
        </div>
       </div>
    </div>
  )
}

export default Delivery
