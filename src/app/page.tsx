"use client"

import StatusBar, { StatType } from "./components/StatusBar"
import ActionsBar from "./components/ActionsBar"
import TamagotchiSelector from "./components/TamagotchiSelector"
import TamagotchiContextProvider from "./components/TamagotchiContext"
import Tamagotchi from "./components/Tamagotchi"
import { Tamagotchi as TamagotchiType } from "./utils/storage"
import TamagotchiTitle from "./components/TamagotchiTitle"
import { getTamagotchis, initializeTamagotchis } from "./utils/storage"
import { useEffect, useState } from "react"
import {
  AddTamagotchiModal,
  AddTamagotchiButton,
} from "./components/AddTamagotchi"

export default function Home() {
  const [tamagotchis, setTamagotchis] = useState<TamagotchiType[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const refreshTamagotchis = () => {
    setTamagotchis(getTamagotchis())
  }

  useEffect(() => {
    setTamagotchis(getTamagotchis())
  }, [])

  return (
    <div className="w-screen h-screen flex justify-start items-center flex-col gap-8 px-10 pb-16 pt-12">
      {tamagotchis.length > 0 ? (
        <TamagotchiContextProvider initialData={tamagotchis[0]}>
          <div className="w-full flex flex-col items-center justify-center">
            <TamagotchiSelector
              tamagotchis={tamagotchis}
              setTamagotchis={setTamagotchis}
            />
            <AddTamagotchiButton onClick={() => setIsModalOpen(true)} />
          </div>
          <div className="flex md:w-5/6 w-full flex-col md:flex-row items-center justify-between h-full gap-8">
            <div className="w-full md:w-1/2 h-full">
              <Tamagotchi />
            </div>
            <div className="flex w-full md:w-1/2 flex-col gap-4 items-center">
              <TamagotchiTitle />
              <StatusBar statType={StatType.Hunger} />
              <StatusBar statType={StatType.Happiness} />
              <StatusBar statType={StatType.Cleanliness} />
            </div>
          </div>
          <ActionsBar />
          <AddTamagotchiModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            refreshTamagotchis={refreshTamagotchis}
          />
        </TamagotchiContextProvider>
      ) : (
        <h1 className="font-extrabold text-3xl">Loading...</h1>
      )}
    </div>
  )
}
