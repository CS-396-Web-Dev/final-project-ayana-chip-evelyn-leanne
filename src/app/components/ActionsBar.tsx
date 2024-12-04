"use client"

import { useTamagotchiContext } from "./TamagotchiContext"
import { Bath, Refrigerator, ToyBrick } from "lucide-react"

interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="flex-grow font-bold bg-slate-100 hover:bg-slate-200 text-gray-900 hover:text-gray-950 md:p-4 p-2 rounded-md transition-all lg:text-2xl text-xl outline outline-4 shadow-xl hover:-translate-y-2"
  >
    <div className="flex items-center justify-center gap-2">
      {icon}
      <h1>{label}</h1>
    </div>
  </button>
)

const ActionsBar = () => {
  const {
    hunger,
    setHunger,
    happiness,
    setHappiness,
    cleanliness,
    setCleanliness,
  } = useTamagotchiContext()

  const handleFeed = () => {
    setHunger(Math.min(hunger + 10, 100))
    setHappiness(Math.max(0, happiness - 3))
    setCleanliness(Math.min(cleanliness + 10, 100))
  }

  const handlePlay = () => {
    setHunger(Math.max(0, hunger - 3))
    setHappiness(Math.min(happiness + 10, 100))
    setCleanliness(Math.max(0, cleanliness - 3))
  }

  const handleClean = () => {
    setHunger(Math.max(0, hunger - 3))
    setHappiness(Math.max(0, happiness - 3))
    setCleanliness(Math.min(cleanliness + 10, 100))
  }

  return (
    <div className="flex md:gap-8 gap-4 w-full md:max-w-xl max-w-md">
      <ActionButton
        icon={<Refrigerator className="md:w-8 md:h-8 w-6 h-6" />}
        label="Feed"
        onClick={handleFeed}
      />
      <ActionButton
        icon={<ToyBrick className="md:w-8 md:h-8 w-6 h-6" />}
        label="Play"
        onClick={handlePlay}
      />
      <ActionButton
        icon={<Bath className="md:w-8 md:h-8 w-6 h-6" />}
        label="Clean"
        onClick={handleClean}
      />
    </div>
  )
}

export default ActionsBar
