"use client"

import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"

// Define the props for the Model component
interface ModelProps {
  url: string
  playAnimation: (anim: (animationName: string) => void) => void
}

const Model: React.FC<ModelProps> = ({ url, playAnimation }) => {
  const { scene, animations } = useGLTF(url) // Load the glTF model with animations
  const groupRef = useRef<THREE.Group>(null)
  const { actions } = useAnimations(animations, groupRef)

  useEffect(() => {
    if (groupRef.current) {
      // Compute the bounding box and center the model
      const box = new THREE.Box3().setFromObject(groupRef.current)
      const center = box.getCenter(new THREE.Vector3())
      groupRef.current.position.set(-center.x, -center.y, -center.z)
    }

    // Play the default "Flying_Idle" animation
    if (actions?.Flying_Idle) {
      actions.Flying_Idle.play()
    }

    // Provide the function to play animations dynamically
    playAnimation((animationName: string) => {
      if (actions) {
        Object.values(actions).forEach((action) => action?.stop())
        const action = actions[animationName]
        if (action) {
          action.reset().play()
        } else {
          console.warn(`Animation '${animationName}' not found`)
        }
      }
    })
  }, [scene, actions, playAnimation])

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  )
}

// Define the props for the Tamagotchi3D component
interface Tamagotchi3DProps {
  modelUrl: string
}

const Tamagotchi3D = forwardRef((props: Tamagotchi3DProps, ref) => {
  const { modelUrl } = props
  const playAnimation = useRef<(animationName: string) => void>(() => {})

  // Expose the `triggerAnimation` function to parent components
  useImperativeHandle(ref, () => ({
    triggerAnimation: (animationName: string) => {
      if (playAnimation.current) {
        playAnimation.current(animationName)
      }
    },
  }))

  return (
    <div className="h-full w-full">
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 4], fov: 60 }}>
        <directionalLight intensity={2} position={[0, 2, 0]} />
        <ambientLight intensity={2} />
        <Model
          url={modelUrl}
          playAnimation={(anim) => {
            playAnimation.current = anim
          }}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
})

export default Tamagotchi3D

useGLTF.preload = (url: string) => {}
