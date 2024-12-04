import Tamagotchi3D from "./Tamagotchi3D"
import { useTamagotchiContext } from "./TamagotchiContext"

const Tamagotchi = () => {
  const { modelName } = useTamagotchiContext()

  return (
    <>
      {modelName == "Dragon" ? (
        <Tamagotchi3D modelUrl={`Dragon.gltf`} yPos={-2.3} />
      ) : (
        <></>
      )}
      {modelName == "Dragon_Evolved" ? (
        <Tamagotchi3D modelUrl={`Dragon_Evolved.gltf`} yPos={-2} />
      ) : (
        <></>
      )}
      {modelName == "Armabee" ? (
        <Tamagotchi3D modelUrl={`Armabee.gltf`} yPos={-2.3} />
      ) : (
        <></>
      )}
      {modelName == "Armabee_Evolved" ? (
        <Tamagotchi3D modelUrl={`Armabee_Evolved.gltf`} yPos={-2} />
      ) : (
        <></>
      )}
    </>
  )
}

export default Tamagotchi
