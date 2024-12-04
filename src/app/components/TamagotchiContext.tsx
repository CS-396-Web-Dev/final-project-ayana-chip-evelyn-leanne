import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react"

interface TamagotchiProviderProps {
  children: ReactNode
  initialData: TamagotchiState
}

interface TamagotchiState {
  name: string
  hunger: number
  happiness: number
  cleanliness: number
  growth: string
  modelName: string
}

interface TamagotchiContextType extends TamagotchiState {
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
}: TamagotchiProviderProps) {
  const [name, setName] = useState(initialData.name)
  const [hunger, setHunger] = useState(initialData.hunger)
  const [happiness, setHappiness] = useState(initialData.happiness)
  const [cleanliness, setCleanliness] = useState(initialData.cleanliness)
  const [growth, setGrowth] = useState(initialData.growth)
  const [modelName, setModelName] = useState(initialData.modelName)

  return (
    <TamagotchiContext.Provider
      value={{
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
