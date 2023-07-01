import React from 'react'
import "./Home.css"
import Topbar from '../components/Topbar/Topbar'
import Selectbar from '../components/Selectbar/Selectbar'
import Items from '../components/Items/Items'
import Footer from '../components/Footer/Footer'
import {BsFillMapFill} from "react-icons/bs"
export default function Home() {
  return (
    <div >
      <Topbar/>
      <Selectbar />
      <Items />
      <button className="map">Show map <BsFillMapFill/></button>
      <Footer />
      
    </div>
  )
}
