import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { Text3D, Center } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { Selection, Select, EffectComposer, Outline } from "@react-three/postprocessing"


interface Props {
  children: string,
  scale: any,
  position: any,
  rotation: any,
  textColor: string,
  x: number,
  z: number,
}

const TextObject: React.FC<Props> = ({ children, position, scale, rotation, textColor, x, z }) => {

  const textMesh = useRef<THREE.Mesh>(null)

  useEffect(() => {
    textMesh.current?.geometry.computeBoundingBox();
    const boundingBox = textMesh.current?.geometry.boundingBox;
    const center = new THREE.Vector3();
    boundingBox?.getCenter(center);
    textMesh.current?.geometry.translate(-center.x, -center.y, -center.z);
  })

  return (

    <>

      <Text3D ref={textMesh} bevelEnabled bevelThickness={0.1} letterSpacing={-0.04} castShadow={true}
        receiveShadow={true} bevelSize={0.04} position={position} rotation={rotation} scale={scale}
        font={'https://unpkg.com/three@0.77.0/examples/fonts/gentilis_bold.typeface.json'}
      >
        {children}
        <meshStandardMaterial color={textColor} />
      </Text3D>

      <Select enabled={false}>
        <mesh position={[x, -1.35, z]} receiveShadow={true}>
          <cylinderGeometry args={[0.6, 0.6, 0.005]} />
          <meshStandardMaterial color={'gray'} transparent={true} opacity={0.2} />
        </mesh>
      </Select>

    </>

  )
}


export default TextObject