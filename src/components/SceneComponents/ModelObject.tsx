import * as THREE from 'three'
import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, Clone, Gltf, } from '@react-three/drei'
import { Select, Selection, EffectComposer, Outline } from "@react-three/postprocessing"
import { Vector3Tuple } from "three";

/*
interface Props {
    url: string,
}
*/

const ModelObject = ({
    url,
    scale,
    position,
    rotation,
    haloScale,
    x,
    z
}
    :
    {
        url: string;
        scale?: number;
        position?: Vector3Tuple;
        rotation?: Vector3Tuple;
        haloScale: number;
        x: number;
        z: number;
    }) => {

    const ref = useRef<THREE.Mesh>(null)
    const model = useRef<THREE.Object3D>()
    const gltf = useLoader(GLTFLoader, url)
    const { scene } = useGLTF(url)

    useEffect(() => {
        ref.current?.geometry.computeBoundingBox();
        const boundingBox = ref.current?.geometry.boundingBox;
        const center = new THREE.Vector3();
        boundingBox?.getCenter(center);
        ref.current?.geometry.translate(-center.x, -center.y, -center.z);
    })

    useLayoutEffect(() => {
        scene.traverse((obj) => obj.isObject3D && (obj.receiveShadow = obj.castShadow = true))
    })

    return (

        <>
            
            <mesh ref={ref}>
                <primitive object={scene} scale={scale} position={position} rotation={rotation} />
            </mesh>

            <Select enabled={false}>
                <mesh position={[x, -1.35, z]} receiveShadow={true}>
                    <cylinderGeometry args={[0.6, 0.6, 0.005]} />
                    <meshStandardMaterial color={'gray'} transparent={true} opacity={0.2} />
                </mesh>
            </Select>

        </>

    )
}


export default ModelObject