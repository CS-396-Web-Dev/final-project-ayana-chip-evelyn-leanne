"use client"

import { useState } from "react"
import StatusBar from "./components/StatusBar"
import Slider from "./components/ui/Slider"
import Tamagotchi from "./components/Tamagotchi"
import ActionsBar from "./components/ActionsBar"
export default function Home() {
  const [percentage, setPercentage] = useState(25)
  const [name, setName] = useState("Tamagotchi")
  const [hunger, setHunger] = useState(100)
  const [happiness, setHappiness] = useState(100)
  const [cleanliness, setCleanliness] = useState(100)
  const [growth, setGrowth] = useState("alive")
  const [index_x, setIndex_x] = useState(0)
  const [index_y, setIndex_y] = useState(0)
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <button className='appButton' onClick={()=> setShowNav(!showNav)} onTouchStart={()=>setShowNav(!showNav)}>Actions</button>
      <StatusBar percentage={percentage} statName="Health" />
      <div className="space-y-2">
        <label
          htmlFor="percentage-slider"
          className="text-sm font-medium text-gray-700"
        >
          Adjust Percentage
        </label>
        <Slider value={percentage} onChange={setPercentage} />
      </div>
      <Tamagotchi name={name} hunger={hunger} happiness={happiness} cleanliness={cleanliness} growth={growth} index_x={index_x} index_y={index_y} />
      <ActionsBar showing={showNav}/>
    </div>
  )
}
