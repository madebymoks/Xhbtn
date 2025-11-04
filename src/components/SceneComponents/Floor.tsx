import React from 'react'
import { MeshReflectorMaterial } from '@react-three/drei'


interface Floor {
    color: string,
    floorType: string
}

const Floor: React.FC<Floor> = ({ color, floorType }) => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow={true}>
            <meshBasicMaterial toneMapped={false}></meshBasicMaterial>
            <planeGeometry args={[100, 100]} />
            {floorType === 'mirror' ?
                <MeshReflectorMaterial
                    mirror={0}
                    blur={[100, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={10}
                    roughness={1}
                    depthScale={1}
                    opacity={0.3}
                    transparent
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color={color}
                    metalness={0.5}
                />
                :
                <shadowMaterial transparent opacity={0.25} />
            }
        </mesh>
    )
}

export default Floor