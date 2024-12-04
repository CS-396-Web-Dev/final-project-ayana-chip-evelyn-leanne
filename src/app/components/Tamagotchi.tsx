import Tamagotchi3D from "./Tamagotchi3D"
import { useTamagotchiContext } from "./TamagotchiContext"

const Tamagotchi = () => {
  const { modelName } = useTamagotchiContext()

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
      {modelName == "Armabee" ? (
        <Tamagotchi3D modelUrl={`Armabee.gltf`} />
      ) : (
        <></>
      )}
      {modelName == "Armabee_Evolved" ? (
        <Tamagotchi3D modelUrl={`Armabee_Evolved.gltf`} />
      ) : (
        <></>
      )}
      {modelName == "Tombstone" ? (
        <Tamagotchi3D modelUrl={`Tombstone.gltf`} />
      ) : (
        <></>
      )}
    </>
  )
}

export default Tamagotchi
