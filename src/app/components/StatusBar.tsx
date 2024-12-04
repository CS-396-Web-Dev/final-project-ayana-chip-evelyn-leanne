import { Smile, ShowerHead, Utensils } from "lucide-react"
import { useTamagotchiContext } from "./TamagotchiContext"

export enum StatType {
  Hunger = "Hunger",
  Happiness = "Happiness",
  Cleanliness = "Cleanliness",
}

interface StatusBarProps {
  statType: StatType
}

export default function StatusBar({ statType }: StatusBarProps) {
  const { hunger, happiness, cleanliness } = useTamagotchiContext()

  const percentage = (() => {
    switch (statType) {
      case StatType.Hunger:
        return hunger
      case StatType.Happiness:
        return happiness
      case StatType.Cleanliness:
        return cleanliness
      default:
        return 0
    }
  })()

  const Icon = (() => {
    switch (statType) {
      case StatType.Hunger:
        return Utensils
      case StatType.Happiness:
        return Smile
      case StatType.Cleanliness:
        return ShowerHead
      default:
        return Utensils
    }
  })()

  const clampedPercentage = Math.max(0, Math.min(100, percentage))
  const getColor = (percent: number) => {
    if (percent >= 66) return "bg-gradient-to-r from-green-500 to-green-600"
    if (percent >= 33) return "bg-gradient-to-r from-yellow-500 to-yellow-600"
    return "bg-gradient-to-r from-red-500 to-red-600"
  }

  return (
    <div className="w-full max-w-md">
      <div className="h-12 rounded-2xl border-4 border-black bg-white flex items-center overflow-hidden relative">
        <div
          className={`h-full flex items-center transition-all duration-300 ease-out ${getColor(
            clampedPercentage
          )}`}
          style={{ width: `${clampedPercentage}%` }}
        >
          <div className="flex items-center justify-center w-12 h-12 text-white">
            <div className="bg-slate-800 p-1 rounded-md">
              <Icon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="absolute right-3 font-bold text-white">
          <div className="bg-slate-800 px-1 rounded-md">
            {clampedPercentage}%
          </div>
        </div>
      </div>
    </div>
  )
}
