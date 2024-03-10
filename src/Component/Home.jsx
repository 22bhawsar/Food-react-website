import React from 'react'
import Hero from "./Hero"
import Delivery from './Delivery'
import Toppicks from './Toppicks'

function Home({handleAdd}) {
  return (
    <div>
       
       <Hero/>
       <Delivery/>
       <Toppicks handleAdd={handleAdd}/>
       
    </div>
  )
}

export default Home
