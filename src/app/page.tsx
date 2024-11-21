"use client"

import { useState } from "react"
import StatusBar from "./components/StatusBar"
import Slider from "./components/ui/Slider"
import Tamagotchi from "./components/Tamagotchi"
export default function Home() {
  const [percentage, setPercentage] = useState(25)
  let name:string="Tamagotchi";
  let hunger:number=100;
  let happiness:number=100;
  let cleanliness:number=100;
  let growth:string="alive";
  let index_x:number=0;
  let index_y:number=0;
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
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
    </div>
  )
}
