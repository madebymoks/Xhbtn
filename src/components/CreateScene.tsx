import React from 'react'

/* React Three Fiber imports */
import { Canvas, useFrame, Camera } from '@react-three/fiber';
import { DeviceOrientationControls, Environment, OrbitControls } from "@react-three/drei"
import Floor from './SceneComponents/Floor';


interface CreateSceneProps {
    color: string;
    floorType: string
}

const CreateScene:React.FC<CreateSceneProps> = ({ color, floorType }) => {
    return (
        <>
        {/*<Canvas className='rounded-lg w-full h-full' shadows={{ enabled: true }} camera={{ fov: 50, near: 0.1, far: 80, position: [0, 0, 0] }}>
            <color attach="background" args={[color]} />
            <DeviceOrientationControls />
            <OrbitControls enablePan={false} />

            {/*<ambientLight intensity={0.6} />

            <spotLight position={[-15, 20, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-15, 20, 7]} decay={0} intensity={Math.PI} />

            <Environment blur={0.8} background>

            <Floor color={color} floorType={floorType} />

            </Environment>

        </Canvas>*/}
        </>
    )
}

export default CreateScene