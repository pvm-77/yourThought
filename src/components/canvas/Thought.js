import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from '../Loader';


import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Thought = () => {
    const thought = useGLTF('./thought2/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={0.4} groundColor='black' />
            <spotLight
                position={[1, 1, 1]}
                angle={180}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={thought.scene}
                scale={0.75}
                position={[5, -6.3, 2]}
                rotation={[0, -1.9, 0]}
            />
        </mesh>
    )
}

const ThoughtCanvas = () => {
    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 1]}
            camera={{ position: [20, 3, 5], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Thought />
            </Suspense>

            <Preload all />
        </Canvas>
    )

}

export default ThoughtCanvas