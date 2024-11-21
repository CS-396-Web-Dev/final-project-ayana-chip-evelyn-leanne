"use client"

import { useState } from "react"
import StatusBar from "./components/StatusBar"
import Slider from "./components/ui/Slider"

export default function Home() {
  const [percentage, setPercentage] = useState(25)

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
    </div>
  )
}
