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
    <div className="w-screen h-screen flex justify-start items-center flex-col gap-8 p-10">
      <TamagotchiContextProvider initialData={initialPetData}>
        <TamagotchiSelector />
        <div className="flex w-5/6 flex-col md:flex-row items-center justify-between h-full gap-8">
          <div className="w-full md:w-1/2 h-full">
            <Tamagotchi3D modelUrl={`${initialPetData.modelName}.gltf`} />
          </div>
          <div className="flex w-1/2 flex-col gap-4 items-center">
            <StatusBar statType={StatType.Hunger} />
            <StatusBar statType={StatType.Happiness} />
            <StatusBar statType={StatType.Cleanliness} />
          </div>
        </div>
        <ActionsBar />
      </TamagotchiContextProvider>
    </div>
  )
}
