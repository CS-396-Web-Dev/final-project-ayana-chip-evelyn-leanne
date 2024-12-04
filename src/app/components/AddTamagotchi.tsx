"use client"

import { useState } from "react"
import { X, Plus, ChevronDown } from "lucide-react"
import { addTamagotchi } from "../utils/storage"

interface AddModalProps {
  isOpen: boolean
  onClose: () => void
  refreshTamagotchis: () => void
}

interface AddButtonProps {
  onClick: () => void
}

const tamagotchiVariants = ["Alpaking", "Armabee", "Dragon", "Glub", "Goleling"]

const AddModal = ({ isOpen, onClose, refreshTamagotchis }: AddModalProps) => {
  const [name, setName] = useState("")
  const [variant, setVariant] = useState("")

  const addNewTamagotchi = () => {
    addTamagotchi({
      name,
      modelName: variant,
      xp: 0,
    })

    refreshTamagotchis()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
        className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-lg border-4 border-black"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 id="modal-title" className="mb-6 text-2xl font-semibold">
          New Tamagotchi
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label htmlFor="variant" className="mb-2 block font-medium">
              Variant
            </label>
            <div className="relative">
              <select
                id="variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="" disabled>
                  Select a variant
                </option>
                {tamagotchiVariants.map((variant) => (
                  <option key={variant} value={variant}>
                    {variant}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              addNewTamagotchi()
            }}
            className="w-full font-bold bg-slate-100 hover:bg-slate-200 text-gray-900 hover:text-gray-950 md:p-2 p-1 rounded-md transition-all lg:text-2xl text-xl outline outline-4 shadow-xl hover:-translate-y-1"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="font-bold bg-slate-100 hover:bg-slate-200 text-gray-900 hover:text-gray-950 md:px-4 px-2 pt-4 pb-2 rounded-xl transition-all lg:text-lg text-sm border-4 border-black shadow-xl -translate-y-3"
    >
      <div className="flex items-center justify-center gap-2">
        <Plus className="md:w-8 md:h-8 w-6 h-6" />
        <h1>New Tamagotchi</h1>
      </div>
    </button>
  )
}

export { AddModal as AddTamagotchiModal, AddButton as AddTamagotchiButton }
