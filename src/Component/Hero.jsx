import React, { useEffect, useState } from "react";
import img1 from "../Assests/img1.png"
import img2 from "../Assests/img2.png"
import img3 from "../Assests/img3.png"
import { FaChevronLeft, FaChevronRight} from "react-icons/fa6";


function  Hero () {
   const imgData = [img1,img2,img3]

   const [slider,setSlider] = useState(0)
    

   function handleplus(){
      setSlider(slider === imgData.length-1 ? 0:slider+1)
   }
   function handleminus(){
     setSlider(slider === 0 ? imgData.length-1:slider-1)
   }

   useEffect(()=>{
      
     const sliderClear = setInterval(()=>{
         handleplus();
      },2000)

      return()=>clearInterval(sliderClear)

   },[slider])
       

   return(
     <>
     <div className=" mt-[100px]">
      <div className=" w-[100%] mx-auto h-[80vh] my-5">
         <img className=" w-[100%] h-[85vh]  object-cover" src={imgData[slider]} alt="" /> 
     </div>
       
      <div className=" absolute top-[50%]  text-center text-white font-semibold w-full text-20px md:text-[30px] flex justify-center">
      <p className=" text-5xl">Welcome To <span className=" font-extrabold  text-black">Spice And Chutney</span></p>
      </div>
     
      <div className=" flex justify-between w-full px-5 absolute top-[50%] text-white">
      <FaChevronLeft size={40} className=" cursor-pointer" onClick={handleminus}/> 
      <FaChevronRight size={40} className=" cursor-pointer" onClick={handleplus}/>
      </div>
     </div>
     </>
   )
}

export default Hero 















