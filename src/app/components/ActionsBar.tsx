"use client"

import { useTamagotchiContext } from "./TamagotchiContext"

const ActionsBar = () => {
  const {
    hunger,
    setHunger,
    happiness,
    setHappiness,
    cleanliness,
    setCleanliness,
  } = useTamagotchiContext()

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex w-56 bg-slate-600 rounded-lg p-2 gap-2">
        <button
          onClick={() => {
            setHunger(Math.min(hunger + 10, 100))
            setHappiness(Math.max(0, happiness - 3))
            setCleanliness(Math.min(cleanliness + 10, 100))
          }}
          className="flex-grow font-bold bg-slate-100 hover:bg-slate-300 text-gray-900 hover:text-gray-950 py-2 rounded-md transition-colors"
        >
          Feed
        </button>
        <button
          onClick={() => {
            setHunger(Math.max(0, hunger - 3))
            setHappiness(Math.min(happiness + 10, 100))
            setCleanliness(Math.max(0, cleanliness - 3))
          }}
          className="flex-grow font-bold bg-slate-100 hover:bg-slate-300 text-gray-900 hover:text-gray-950 py-2 rounded-md transition-colors"
        >
          Play
        </button>
        <button
          onClick={() => {
            setHunger(Math.max(0, hunger - 3))
            setHappiness(Math.max(0, happiness - 3))
            setCleanliness(Math.min(cleanliness + 10, 100))
          }}
          className="flex-grow font-bold bg-slate-100 hover:bg-slate-300 text-gray-900 hover:text-gray-950 py-2 rounded-md transition-colors"
        >
          Clean
        </button>
      </div>
    </div>
  )
}

export default ActionsBar
