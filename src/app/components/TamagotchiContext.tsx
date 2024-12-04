import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react"
import { updateTamagotchi } from "../utils/storage"

interface TamagotchiProviderProps {
  children: ReactNode
  initialData: TamagotchiState
  refreshTamagotchis: () => void
}

interface TamagotchiState {
  id: number
  name: string
  hunger: number
  happiness: number
  cleanliness: number
  growth: string
  modelName: string
}

interface TamagotchiContextType extends TamagotchiState {
  setId: Dispatch<SetStateAction<number>>
  setName: Dispatch<SetStateAction<string>>
  setHunger: Dispatch<SetStateAction<number>>
  setHappiness: Dispatch<SetStateAction<number>>
  setCleanliness: Dispatch<SetStateAction<number>>
  setGrowth: Dispatch<SetStateAction<string>>
  setModelName: Dispatch<SetStateAction<string>>
}

const TamagotchiContext = createContext<TamagotchiContextType | undefined>(
  undefined
)

export const useTamagotchiContext = (): TamagotchiContextType => {
  const context = useContext(TamagotchiContext)
  if (!context) {
    throw new Error(
      "useTamagotchiContext must be used within a TamagotchiContextProvider"
    )
  }
  return context
}

export default function TamagotchiContextProvider({
  children,
  initialData,
  refreshTamagotchis,
}: TamagotchiProviderProps) {
  const [id, setId] = useState(initialData.id)
  const [name, setName] = useState(initialData.name)
  const [hunger, setHungerBase] = useState(initialData.hunger)
  const [happiness, setHappiness] = useState(initialData.happiness)
  const [cleanliness, setCleanliness] = useState(initialData.cleanliness)
  const [growth, setGrowth] = useState(initialData.growth)
  const [modelName, setModelName] = useState(initialData.modelName)

  const setHunger = (newHunger: SetStateAction<number>) => {
    setHungerBase(newHunger)

    if (newHunger == 0) {
      setGrowth("Dead")
      setModelName("Tombstone")
    }
  }

  useEffect(() => {
    updateTamagotchi(id, {
      name,
      hunger,
      happiness,
      cleanliness,
      growth,
      modelName,
    })

    refreshTamagotchis()
  }, [name, hunger, happiness, cleanliness, growth, modelName])

  return (
    <TamagotchiContext.Provider
      value={{
        id,
        setId,
        name,
        setName,
        hunger,
        setHunger,
        happiness,
        setHappiness,
        cleanliness,
        setCleanliness,
        growth,
        setGrowth,
        modelName,
        setModelName,
      }}
    >
      {children}
    </TamagotchiContext.Provider>
  )
}
