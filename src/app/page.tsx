"use client"

import { useState } from "react"
import StatusBar from "./components/StatusBar"
import Slider from "./components/ui/Slider"
import Tamagotchi from "./components/Tamagotchi"
import ActionsBar from "./components/ActionsBar"
import TamagotchiSelector from "./components/TamagotchiSelector";
import StatContextProvider from "./components/StatContext";

export default function Home() {
  // const [hungerPercentage, setHungerPercentage] = useState(100)
  // const [happinessPercentage, setHappinessPercentage] = useState(100)
  // const [cleanlinessPercentage, setCleanlinessPercentage] = useState(100)
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="w-screen h-screen flex justify-start items-center flex-col gap-8 p-4">
      <StatContextProvider>
        {/* <StatusBar percentage={hungerPercentage} statName="Hunger" />
        <StatusBar percentage={happinessPercentage} statName="Happiness" />
        <StatusBar percentage={cleanlinessPercentage} statName="Cleanliness" /> */}
        <StatusBar statName="Hunger" />
        <StatusBar statName="Happiness" />
        <StatusBar statName="Cleanliness" />
        {/* <Tamagotchi
          name={name}
          hunger={hunger}
          happiness={happiness}
          cleanliness={cleanliness}
          growth={growth}
          index_x={index_x}
          index_y={index_y}
        /> */}
        <TamagotchiSelector />
        <Tamagotchi />
        {/* <button
          className="appButton"
          onClick={() => setShowNav(!showNav)}
          onTouchStart={() => setShowNav(!showNav)}
        >
          Actions
        </button> */}
        <ActionsBar />
      </StatContextProvider>
    </div>
  )
}
