"use client"

import { useState } from "react"
import StatusBar from "./components/StatusBar"
import Slider from "./components/ui/Slider"
import Tamagotchi from "./components/Tamagotchi"
import ActionsBar from "./components/ActionsBar"

export default function Home() {
  const [hungerPercentage, setHungerPercentage] = useState(100)
  const [happinessPercentage, setHappinessPercentage] = useState(100)
  const [cleanlinessPercentage, setCleanlinessPercentage] = useState(100)

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
      <StatusBar percentage={hungerPercentage} statName="Hunger" />
      <StatusBar percentage={happinessPercentage} statName="Happiness" />
      <StatusBar percentage={cleanlinessPercentage} statName="Cleanliness" />
      <Tamagotchi
        name={name}
        hunger={hunger}
        happiness={happiness}
        cleanliness={cleanliness}
        growth={growth}
        index_x={index_x}
        index_y={index_y}
      />
      <button
        className="appButton"
        onClick={() => setShowNav(!showNav)}
        onTouchStart={() => setShowNav(!showNav)}
      >
        Actions
      </button>
      <ActionsBar showing={showNav} />
    </div>
  )
}
