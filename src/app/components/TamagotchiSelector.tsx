import React, { useState } from "react"
import { useTamagotchiContext } from "./TamagotchiContext"

const TamagotchiSelector = () => {
  // State to track which Tamagotchi is currently selected
  const {
    setName,
    setHunger,
    setHappiness,
    setCleanliness,
    setGrowth,
    setModelName,
  } = useTamagotchiContext()

  const tamagotchis = [
    {
      name: "Tammy",
      hunger: 80,
      happiness: 50,
      cleanliness: 90,
      growth: "Base",
      modelName: "Dragon",
    },
    {
      name: "Tommy",
      hunger: 60,
      happiness: 75,
      cleanliness: 30,
      growth: "Evolved",
      modelName: "Dragon_Evolved",
    },
    {
      name: "Tina",
      hunger: 25,
      happiness: 10,
      cleanliness: 50,
      growth: "Evolved",
      modelName: "Armabee_Evolved",
    },
  ]

  // Render the corresponding Tamagotchi component
  const handleSelect = (index: number) => {
    const selected = tamagotchis[index]
    setName(selected.name)
    setHunger(selected.hunger)
    setHappiness(selected.happiness)
    setCleanliness(selected.cleanliness)
    setGrowth(selected.growth)
    setModelName(selected.modelName)
  }

  return (
    <div className="tamagotchi-selector flex flex-col items-center gap-4">
      <h1 className="text-xl font-semibold text-gray-800">
        Select New Tamagotchi
      </h1>

      {/* Buttons to switch Tamagotchis */}
      <div className="flex gap-4 justify-center">
        {tamagotchis.map((tamagotchi, index) => (
          <button
            key={index}
            className="min-w-[6rem] p-2 bg-gray-200 rounded"
            onClick={() => handleSelect(index)}
          >
            {tamagotchi.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TamagotchiSelector
