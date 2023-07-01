import React from 'react'
import "./Selectbar.css"
import {AiOutlineHome} from "react-icons/ai"
import {GiFarmTractor,GiWoodCabin,GiUfo,GiDiceTwentyFacesTwenty} from "react-icons/gi"
import {FaSwimmingPool} from "react-icons/fa"
import {IoIosArrowDropright} from "react-icons/io"
import {LuFilter} from "react-icons/lu"
import {MdHolidayVillage,MdFreeBreakfast} from "react-icons/md"
import {LiaWaterSolid} from "react-icons/lia"
import {PiWarehouseThin} from "react-icons/pi"
import {SiAltiumdesigner,SiInteractiondesignfoundation} from "react-icons/si"
export default function Selectbar() {
  return (
    <>
    <div className='select-bar'>
      <div className="rooms">
        <AiOutlineHome/>
        <div>Rooms</div>
      </div>
      <div className="rooms">
        <GiFarmTractor/>
        <div>Farm house</div>
      </div>
      <div className="rooms">
        <FaSwimmingPool/>
        <div>Pool house</div>

      </div>
      <div className="rooms">
        <MdHolidayVillage/>
        <div>Amazing</div>
        
      </div>
      <div className="rooms">
        <GiWoodCabin/>
        <div>Woods</div>

      </div>
      <div className="rooms">
        <LiaWaterSolid/>
        <div>Lake</div>

      </div>
      <div className="rooms">

        <GiUfo/>
        <div>anonymous</div>
      </div>
      <div className="rooms">
        <MdFreeBreakfast/>
        <div>BigBelly</div>

      </div>
      <div className="rooms">
        <PiWarehouseThin/>
        <div>TinyHouse</div>

      </div>
      <div className="rooms">
        <SiAltiumdesigner/>
        <div>Designer</div>

      </div>
      <div className="rooms">

        <SiInteractiondesignfoundation/>
        <div>Forest</div>
      </div>
      <div className="rooms">
        <GiDiceTwentyFacesTwenty/>
        <div>Snow</div>

      </div>
      <div className="arrow">
        <IoIosArrowDropright className='arrow-icon'/>

      </div>
      <div className="filter">
        <LuFilter/>
        <div>Filters</div>
      </div>
    </div>

    </>
  )
}
