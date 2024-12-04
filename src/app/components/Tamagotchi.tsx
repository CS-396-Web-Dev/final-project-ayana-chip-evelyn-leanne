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
      {modelName == "Alpaking" ? (
        <Tamagotchi3D modelUrl={`Alpaking.gltf`} />
      ) : (
        <></>
      )}
      {modelName == "Alpaking_Evolved" ? (
        <Tamagotchi3D modelUrl={`Alpaking_Evolved.gltf`} />
      ) : (
        <></>
      )}
      {modelName == "Glub" ? <Tamagotchi3D modelUrl={`Glub.gltf`} /> : <></>}
      {modelName == "Glub_Evolved" ? (
        <Tamagotchi3D modelUrl={`Glub_Evolved.gltf`} />
      ) : (
        <></>
      )}
      {modelName == "Goleling" ? (
        <Tamagotchi3D modelUrl={`Goleling.gltf`} />
      ) : (
        <></>
      )}
      {modelName == "Goleling_Evolved" ? (
        <Tamagotchi3D modelUrl={`Goleling_Evolved.gltf`} />
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
