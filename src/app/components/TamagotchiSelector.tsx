"use client"

import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react"
import { useTamagotchiContext } from "./TamagotchiContext"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getTamagotchis, Tamagotchi, updateTamagotchi } from "../utils/storage"

interface TamagotchiSelectorProps {
  tamagotchis: Tamagotchi[]
  setTamagotchis: Dispatch<SetStateAction<Tamagotchi[]>>
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
}

const TamagotchiSelector = ({
  tamagotchis,
  setTamagotchis,
  currentIndex,
  setCurrentIndex,
}: TamagotchiSelectorProps) => {
  const {
    id,
    name,
    hunger,
    happiness,
    cleanliness,
    growth,
    modelName,
    setId,
    setName,
    setHunger,
    setHappiness,
    setCleanliness,
    setGrowth,
    setModelName,
  } = useTamagotchiContext()

  // const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"prev" | "next" | null>(null)

  const navigate = useCallback(
    (newDirection: "prev" | "next") => {
      if (isTransitioning) return

      setIsTransitioning(true)
      setIsVisible(false)
      setDirection(newDirection)
    },
    [isTransitioning]
  )

  const handleSelect = (index: number) => {
    updateTamagotchi(id, {
      name,
      hunger,
      happiness,
      cleanliness,
      growth,
      modelName,
    })

    setTamagotchis(getTamagotchis())

    const selected = tamagotchis[index]
    setId(selected.id)
    setName(selected.name)
    setHunger(selected.hunger)
    setHappiness(selected.happiness)
    setCleanliness(selected.cleanliness)
    setGrowth(selected.growth)
    setModelName(selected.modelName)
  }

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setCurrentIndex((current) => {
          if (direction === "prev") {
            return current === 0 ? tamagotchis.length - 1 : current - 1
          } else {
            return current === tamagotchis.length - 1 ? 0 : current + 1
          }
        })
        setIsVisible(true)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isVisible, direction])

  useEffect(() => {
    handleSelect(currentIndex)
  }, [currentIndex])

  return (
    <div className="w-full max-w-xl px-4 z-50">
      <div className="relative w-full bg-slate-100 border-4 border-black rounded-xl shadow-lg overflow-hidden">
        <button
          onClick={() => navigate("prev")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 border-2 border-black shadow-md hover:bg-slate-200 transition-colors"
          disabled={isTransitioning}
          aria-label="Previous Tamagotchi"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => navigate("next")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 border-2 border-black shadow-md hover:bg-slate-200 transition-colors"
          disabled={isTransitioning}
          aria-label="Next Tamagotchi"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          className="relative h-24 flex items-center justify-center overflow-hidden"
          role="region"
          aria-label="Tamagotchi selection carousel"
        >
          <div
            className={`absolute w-full flex justify-center items-center transition-opacity duration-300 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-3xl font-medium">
              {tamagotchis[currentIndex].name}
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {tamagotchis.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-slate-800" : "bg-slate-400"
              }`}
              role="presentation"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TamagotchiSelector
