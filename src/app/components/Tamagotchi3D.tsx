"use client"

import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"

interface ModelProps {
  url: string
  playAnimation: (anim: (animationName: string) => void) => void
}

const Model: React.FC<ModelProps> = ({ url, playAnimation }) => {
  const { size } = useThree()

  const { scene, animations } = useGLTF(url)
  const groupRef = useRef<THREE.Group>(null)
  const { mixer, actions } = useAnimations(animations, groupRef)

  useEffect(() => {
    if (actions?.Flying_Idle) {
      actions.Flying_Idle.play()
      // mixer.timeScale = 1
    }

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

  useEffect(() => {
    if (groupRef.current) {
      const scaleFactor = 1 - (675 - size.width) / 675
      groupRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor)

      const box = new THREE.Box3().setFromObject(groupRef.current)
      const center = box.getCenter(new THREE.Vector3())
      groupRef.current.position.set(-center.x, -center.y, -center.z)
    }
  }, [size])

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  )
}

interface Tamagotchi3DProps {
  modelUrl: string
}

const Tamagotchi3D = forwardRef((props: Tamagotchi3DProps, ref) => {
  const { modelUrl } = props
  const playAnimation = useRef<(animationName: string) => void>(() => {})

  useImperativeHandle(ref, () => ({
    triggerAnimation: (animationName: string) => {
      if (playAnimation.current) {
        playAnimation.current(animationName)
      }
    },
  }))

  return (
    <div className="h-full w-full">
      <Canvas
        orthographic
        camera={{ zoom: 140, position: [0, 0, 10], fov: 60 }}
      >
        <directionalLight intensity={5} position={[0, 2, 0]} />
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
