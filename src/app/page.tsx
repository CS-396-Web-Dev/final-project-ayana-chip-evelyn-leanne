"use client"

import StatusBar, { StatType } from "./components/StatusBar"
import ActionsBar from "./components/ActionsBar"
import TamagotchiSelector from "./components/TamagotchiSelector"
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
      <TamagotchiContextProvider initialData={initialPetData}>
        <TamagotchiSelector />
        <StatusBar statType={StatType.Hunger} />
        <StatusBar statType={StatType.Happiness} />
        <StatusBar statType={StatType.Cleanliness} />
        <ActionsBar />
      </TamagotchiContextProvider>

      <Tamagotchi3D modelUrl={`${initialPetData.modelName}.gltf`} />
    </div>
  )
}
