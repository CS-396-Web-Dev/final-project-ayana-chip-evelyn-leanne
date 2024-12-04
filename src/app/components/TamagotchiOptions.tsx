"use client"

import { useState, useRef, useEffect } from "react"
import { MoreHorizontal, Pencil, Trash2, Check } from "lucide-react"
import { useTamagotchiContext } from "./TamagotchiContext"
import { deleteTamagotchi, updateTamagotchi } from "../utils/storage"

interface TamagotchiOptionsProps {
  refreshTamagotchis: () => void
  onDelete: () => void
}

const TamagotchiOptions = ({
  refreshTamagotchis,
  onDelete,
}: TamagotchiOptionsProps) => {
  const { id, name, setName } = useTamagotchiContext()

  const [isOpen, setIsOpen] = useState(false)
  const [isRenaming, setIsRenaming] = useState(false)
  const [newName, setNewName] = useState("")
  const menuRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsRenaming(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (isRenaming) {
      inputRef.current?.focus()
    }
  }, [isRenaming])

  const handleRename = () => {
    if (newName.trim() !== "") {
      setName(newName)
      updateTamagotchi(id, { name })

      setIsRenaming(false)
      setIsOpen(false)
      refreshTamagotchis()
    }
  }

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete your Tamagotchi?")) {
      onDelete()
      deleteTamagotchi(id)
      setIsOpen(false)
      refreshTamagotchis()
    }
  }

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 outline outline-2 transition-colors"
        aria-label="More options"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <MoreHorizontal className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute left-full ml-2 top-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {isRenaming ? (
            <div className="px-4 py-2 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="flex-grow text-sm border rounded px-2 py-1"
                onKeyPress={(e) => e.key === "Enter" && handleRename()}
              />
              <button
                onClick={handleRename}
                className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                aria-label="Save new name"
              >
                <Check className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsRenaming(true)}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <Pencil className="w-4 h-4" />
              Rename
            </button>
          )}
          <button
            onClick={handleDelete}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default TamagotchiOptions
