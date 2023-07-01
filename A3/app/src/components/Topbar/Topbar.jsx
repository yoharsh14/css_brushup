import React from 'react'
import "./Topbar.css"
import logo from "../../Constants/logos/logo.png"
import {BsSearch} from "react-icons/bs"
import {GoGlobe} from "react-icons/go"
import {AiOutlineMenu} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div>
        <img src={logo} className='logo' alt=''/>
        </div>
        <div className="topbar-search">
          <div className='small'>Anywhere</div>
          <div className='small-mid'>Any week</div>
          <div className='search'>
          <input type="text" placeholder='Add guests' className='text-box'/>
         <div className="search-icon">
          <BsSearch className='BsSearch'/>
          </div> 
          </div>
          </div>
          <div className="topbar-left">
            <div>Airbnb your home</div>
            <GoGlobe className='globe'/>
            <div className='profile'>
              <AiOutlineMenu className='a'/>
              <CgProfile className='b'/>
            </div>
          </div>
      </div>  
    </>
  )
}
