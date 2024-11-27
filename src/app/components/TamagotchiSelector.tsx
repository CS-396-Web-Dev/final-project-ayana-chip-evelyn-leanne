import React, { useState } from "react";
import Tamagotchi from "./Tamagotchi";
import TamagotchiTwo from "./TamagotchiTwo";
import TamagotchiThree from "./TamagotchiThree";

const TamagotchiSelector = () => {
  // State to track which Tamagotchi is currently selected
  const [selectedTamagotchi, setSelectedTamagotchi] = useState(1);


  // Render the corresponding Tamagotchi component
  const renderTamagotchi = () => {
    switch (selectedTamagotchi) {
      case 1:
        return <Tamagotchi name="Tammy" hunger={80} happiness={70} cleanliness={90} growth="child" index_x={0} index_y={0} />;
      case 2:
        return <TamagotchiTwo name="Tommy" hunger={60} happiness={80} cleanliness={85} growth="adult" index_x={0} index_y={0} />;
      case 3:
        return <TamagotchiThree name="Tina" hunger={100} happiness={60} cleanliness={70} growth="baby" index_x={0} index_y={0} />;
      default:
        return null;
    }
  };

  return (
    <div className="tamagotchi-selector flex flex-col items-center gap-4">
      <h1 className="text-xl font-semibold text-gray-800">Select Your Tamagotchi</h1>

      {/* Buttons to switch Tamagotchis */}
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedTamagotchi(1)}
          className={`px-4 py-2 rounded-md ${
            selectedTamagotchi === 1 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Tamagotchi One
        </button>
        <button
          onClick={() => setSelectedTamagotchi(2)}
          className={`px-4 py-2 rounded-md ${
            selectedTamagotchi === 2 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Tamagotchi Two
        </button>
        <button
          onClick={() => setSelectedTamagotchi(3)}
          className={`px-4 py-2 rounded-md ${
            selectedTamagotchi === 3 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Tamagotchi Three
        </button>
      </div>

      {/* Render the selected Tamagotchi */}
      <div className="tamagotchi-display mt-4">{renderTamagotchi()}</div>
    </div>
  );
};

export default TamagotchiSelector;
