export interface Tamagotchi {
  id: number
  name: string
  hunger: number
  happiness: number
  cleanliness: number
  growth: string
  modelName: string
}

const STORAGE_KEY = "tamagotchis"

const getStoredTamagotchis = (): Tamagotchi[] => {
  const storedData = localStorage.getItem(STORAGE_KEY)
  return storedData ? JSON.parse(storedData) : []
}

export const getTamagotchis = (): Tamagotchi[] => {
  return getStoredTamagotchis()
}

export const getTamagotchiById = (id: number): Tamagotchi | undefined => {
  const tamagotchis = getStoredTamagotchis()
  return tamagotchis.find((tamagotchi) => tamagotchi.id === id)
}

export const addTamagotchi = (newTamagotchi: Partial<Tamagotchi>): void => {
  const tamagotchis = getStoredTamagotchis()
  const updatedTamagotchis = [
    ...tamagotchis,
    {
      ...newTamagotchi,
      id: tamagotchis[tamagotchis.length - 1].id + 1,
      hunger: 100,
      happiness: 100,
      cleanliness: 100,
      growth: "Base",
    },
  ]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTamagotchis))
}

export const updateTamagotchi = (
  id: number,
  newVals: Partial<Tamagotchi>
): void => {
  const tamagotchis = getStoredTamagotchis()
  const updatedTamagotchis = tamagotchis.map((tamagotchi) => {
    if (tamagotchi.id === id) {
      return { ...tamagotchi, ...newVals }
    }
    return tamagotchi
  })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTamagotchis))
}

export const deleteTamagotchi = (id: number): void => {
  const tamagotchis = getStoredTamagotchis()
  const updatedTamagotchis = tamagotchis.filter(
    (tamagotchi) => tamagotchi.id !== id
  )
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTamagotchis))
}

export const hasTamagotchis = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) !== null
}

export const initializeTamagotchis = (initialData: Tamagotchi[]): boolean => {
  const tamagotchis = getStoredTamagotchis()

  if (tamagotchis.length == 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
    return true
  }

  return false
}
