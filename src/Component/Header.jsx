import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Header({count}) {
   
   const [sidenav,setSidenav] = useState(false)
   
  

  return (
       <div className='fixed z-50 top-0 left-0 w-full bg-white'>
       <div className='flex justify-between  py-[20px] px-[20px] text-[18px] border-b relative '>
         <div>
            <Link to="/">
            <p className=' cursor-pointer'>Yummy <span className=' font-bold text-[#7D0A0A]'>Food</span></p>
            </Link>
         </div>

         <div>
         
         <ul className=' sm:flex  gap-6 font-semibold hidden cursor-pointer   '>
            
            <Link to='/'>
                <li className='hover:text-[#7D0A0A]'>Home</li>
                </Link>
                <Link to='/AboutUs'>
                <li  className='hover:text-[#7D0A0A]'>About us</li>
                </Link>
                <Link to='/OurFood'>
                <li  className='hover:text-[#7D0A0A]'>OurFood</li>
                </Link>
                <Link to='/Signin'>
                <li  className='hover:text-[#7D0A0A]'>Sign In</li>
                </Link>
            </ul>           
         </div>

       {sidenav?
        <div className=' bg-[#EAD196] w-[200px] absolute top-0 right-0 text-center h-[50vh] flex items-center justify-center z-10'>
        <RxCross2 size={25} 
        className=' absolute top-3 right-3 cursor-pointer'
         onClick={()=>setSidenav(!sidenav)}/>

        <ul className=' flex  gap-12 cursor-pointer flex-col sm:flex-col '>

        <Link to='/'>
       <li className='hover:text-[#7D0A0A]'  onClick={()=>setSidenav(!sidenav)}>Home</li>
        </Link>
        <Link to='/AboutUs'>
       <li  className='hover:text-[#7D0A0A]'  onClick={()=>setSidenav(!sidenav)}>About us</li>
       </Link>
       <Link to='/OurFood'>
       <li  className='hover:text-[#7D0A0A]' onClick={()=>setSidenav(!sidenav)}>OurFood</li>
       </Link>
       <Link to='/Signin'>
       <li  className='hover:text-[#7D0A0A]' onClick={()=>setSidenav(!sidenav)}>Sign in</li>
       </Link>
   </ul>
   
</div>:""}
  

         <div className='flex gap-5'>
            <p><GiHamburgerMenu size={30} 
            className=' cursor-pointer block sm:hidden' 
            onClick={()=>setSidenav(!sidenav)}/></p>
            <p>{count}<FaCartShopping size={30} /></p>
         </div>
       </div>
       </div>
  )
}

export default Header

