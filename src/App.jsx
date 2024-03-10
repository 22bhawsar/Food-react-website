
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import OurFood from './Component/OurFood'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import AboutUs from './Component/AboutUs'
import SignIn from './Component/SignIn'
import { useState } from 'react'

function App() {
   const [count, setCount] =useState(0)
   function handleAdd (){
     setCount(count+1)
   }
  
  return (
    <>
      <div>
        <BrowserRouter>
        <Header count={count}/>
        <Routes>
          <Route path='/' element={<Home handleAdd= {handleAdd}/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ourfood' element={<OurFood/>}/>
          <Route path='/signin'  element={<SignIn/>}/>
        </Routes>
        
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
