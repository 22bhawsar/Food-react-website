import React from 'react'

function Footer() {
  return (
    <div className=' w-full bg-black text-white mt-[100px]'>
      <div className=' grid grid-cols-2 md:grid-cols-4 py-10 pl-5 '>

        <div>
            <h2 className=' font-bold mb-3 text-[20px] md:text-[25px]'>Yummy <span className=' text-[#7D0A0A]'>Food</span></h2>
            <p className=' text-[20px] text-[gray]'> 2023 Bundi Technologies Pvt Ltd</p>
        </div>

        <div>
            <h2 className=' font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>About</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Careers</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Team</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Swiggy one</p>
          
        </div>

        <div>
            <h2 className=' font-bold mb-3 text-[20px] md:text-[25px]'>Contact us</h2>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Help & Support</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Partner with us</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Ride with us</p>
        </div>

        <div>
            <h2 className=' font-bold mb-3 text-[20px] md:text-[25px]'>We deliver</h2>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Bangalore</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Gurgaon</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>hyderabad</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Mumbai</p>
            <p className=' text-[15px] md:text-[20px] text-[gray]'>Pune</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
