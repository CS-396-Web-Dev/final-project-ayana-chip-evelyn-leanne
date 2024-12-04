import { useTamagotchiContext } from "./TamagotchiContext"

const TamagotchiTitle = () => {
  const { name, growth } = useTamagotchiContext()

  return (
    <div className="flex items-center justify-between w-full md:max-w-xl max-w-md">
      <h1 className="font-extrabold text-4xl text-black">{name}</h1>
      <h1 className="text-lg font-bold text-center text-white bg-slate-800 p-1.5 rounded-md border-2">
        {growth}
      </h1>
    </div>
  )
}

export default TamagotchiTitle
