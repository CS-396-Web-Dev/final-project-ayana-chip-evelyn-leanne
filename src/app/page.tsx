"use client"

import { useState } from "react"
import StatusBar from "./components/StatusBar"
import Tamagotchi from "./components/Tamagotchi"
import ActionsBar from "./components/ActionsBar"
import TamagotchiSelector from "./components/TamagotchiSelector"
import StatContextProvider from "./components/StatContext"
import Tamagotchi3D from "./components/Tamagotchi3D"

export default function Home() {
  // const [hungerPercentage, setHungerPercentage] = useState(100)
  // const [happinessPercentage, setHappinessPercentage] = useState(100)
  // const [cleanlinessPercentage, setCleanlinessPercentage] = useState(100)
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="w-screen h-screen flex justify-start items-center flex-col gap-8 p-4">
      <StatContextProvider>
        <TamagotchiSelector />
        <StatusBar statName="Hunger" />
        <StatusBar statName="Happiness" />
        <StatusBar statName="Cleanliness" />
        {/* <Tamagotchi /> */}
        <Tamagotchi3D modelUrl="Dragon.gltf" />
        <ActionsBar />
      </StatContextProvider>
    </div>
  )
}
