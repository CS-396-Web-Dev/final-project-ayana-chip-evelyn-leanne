"use client"

import { useState } from "react"
import StatusBar, { StatType } from "./components/StatusBar"
import Tamagotchi from "./components/Tamagotchi"
import ActionsBar from "./components/ActionsBar"
import TamagotchiSelector from "./components/TamagotchiSelector"
import StatContextProvider from "./components/StatContext"
import Tamagotchi3D from "./components/Tamagotchi3D"
import TamagotchiContextProvider from "./components/TamagotchiContext"

export default function Home() {
  const initialPetData = {
    name: "Tammy",
    hunger: 80,
    happiness: 50,
    cleanliness: 90,
    growth: "child",
    modelName: "Dragon",
  }

  return (
    <div className="w-screen h-screen flex justify-start items-center flex-col gap-8 p-4">
      {/* <StatContextProvider>
        <TamagotchiSelector />
        <StatusBar statName="Hunger" />
        <StatusBar statName="Happiness" />
        <StatusBar statName="Cleanliness" />
        <Tamagotchi />
        <Tamagotchi3D modelUrl="Dragon.gltf" />
        <ActionsBar />
      </StatContextProvider> */}
      <TamagotchiContextProvider initialData={initialPetData}>
        <TamagotchiSelector />
        <StatusBar statType={StatType.Hunger} />
        <StatusBar statType={StatType.Happiness} />
        <StatusBar statType={StatType.Cleanliness} />
        <Tamagotchi3D />
        <ActionsBar />
      </TamagotchiContextProvider>
    </div>
  )
}
