"use client"

import { useState, useEffect, useCallback } from "react"
import { useTamagotchiContext } from "./TamagotchiContext"
import { ChevronLeft, ChevronRight } from "lucide-react"

const tamagotchis = [
  {
    id: 1,
    name: "Tammy",
    hunger: 80,
    happiness: 50,
    cleanliness: 90,
    growth: "Base",
    modelName: "Dragon",
  },
  {
    id: 2,
    name: "Tommy",
    hunger: 60,
    happiness: 75,
    cleanliness: 30,
    growth: "Evolved",
    modelName: "Dragon_Evolved",
  },
  {
    id: 3,
    name: "Tina",
    hunger: 25,
    happiness: 10,
    cleanliness: 50,
    growth: "Evolved",
    modelName: "Armabee_Evolved",
  },
]

const TamagotchiCarousel = () => {
  const {
    setName,
    setHunger,
    setHappiness,
    setCleanliness,
    setGrowth,
    setModelName,
  } = useTamagotchiContext()

  const [currentIndex, setCurrentIndex] = useState(0)
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
    const selected = tamagotchis[index]
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
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="relative w-full bg-white border-4 border-black rounded-xl shadow-lg overflow-hidden">
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

export default TamagotchiCarousel
