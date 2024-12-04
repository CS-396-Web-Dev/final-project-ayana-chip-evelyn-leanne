import Tamagotchi3D from "./Tamagotchi3D"
import { useTamagotchiContext } from "./TamagotchiContext"

const Tamagotchi = () => {
  const { modelName } = useTamagotchiContext()
  console.log(modelName)

  return (
    <>
      {modelName == "Dragon" ? (
        <Tamagotchi3D modelUrl={`Dragon.gltf`} />
      ) : (
        <></>
      )}
      {modelName == "Dragon_Evolved" ? (
        <Tamagotchi3D modelUrl={`Dragon_Evolved.gltf`} />
      ) : (
        <></>
      )}
    </>
  )
}

export default Tamagotchi
