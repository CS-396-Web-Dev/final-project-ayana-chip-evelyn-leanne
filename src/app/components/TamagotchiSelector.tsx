import React, { useState } from "react";
import Tamagotchi from "./Tamagotchi";
import { useStatContext } from "./StatContext";

const TamagotchiSelector = () => {
  // State to track which Tamagotchi is currently selected
  const { setName, setHunger,setHappiness, setCleanliness, setGrowth,} = useStatContext();
  const tamagotchis = [{name: "Tammy", hunger: 80, happiness: 70, cleanliness: 90, growth: "child", }, 
                       {name: "Tommy", hunger: 60, happiness: 90, cleanliness: 80, growth: "teenager", }, 
                       {name: "Tina", hunger: 90, happiness: 60, cleanliness: 85, growth: "adult", }, ];

  // Render the corresponding Tamagotchi component
  const handleSelect = (index: number) => {
    const selected = tamagotchis[index];
    setName(selected.name);
    setHunger(selected.hunger);
    setHappiness(selected.happiness);
    setCleanliness(selected.cleanliness);
    setGrowth(selected.growth);
  };

  return (
    <div className="tamagotchi-selector flex flex-col items-center gap-4">
      <h1 className="text-xl font-semibold text-gray-800">Select New Tamagotchi</h1>

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
  );
};

export default TamagotchiSelector;
