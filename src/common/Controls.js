import React, { useRef } from 'react'
import {
  useFrame,
  extend,
  useThree
} from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
extend({ OrbitControls })

const Controls = () => {
  const controlsRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => controlsRef.current && controlsRef.current.update())

  return (
    <orbitControls
      key={`Canvas-Three-Controls`}
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableRotate
      enablePan={false}
      maxDistance={100}
      minDistance={47}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2}
      dispose={null}
    />
  )
}

export default Controls
