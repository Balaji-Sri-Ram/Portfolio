import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Text, Float } from "@react-three/drei";
import * as THREE from "three";

const TechLeaf = ({ position, rotation, text }) => {
    return (
        <group position={position} rotation={rotation}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* The Leaf Object */}
                <mesh>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="#22c55e" roughness={0.3} metalness={0.2} />
                </mesh>

                {/* The Tech Text */}
                <Text
                    position={[0, 0, 0.35]} // Slightly in front of the leaf
                    color="black"
                    fontSize={0.15}
                    fontWeight="bold"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                >
                    {text}
                </Text>
            </Float>
        </group>
    );
};

const Tree = () => {
    // Manually positioned leaves to form a "Tree Canopy" shape
    const leavesData = [
        // Top Cluster
        { pos: [0, 2.8, 0], text: "React" },
        { pos: [0.5, 2.6, 0.4], text: "Node.js" },
        { pos: [-0.4, 2.7, -0.3], text: "Three.js" },
        { pos: [0.3, 2.9, -0.4], text: "JS" },

        // Middle Layer
        { pos: [0.8, 2.2, 0], text: "HTML" },
        { pos: [-0.8, 2.3, 0.2], text: "CSS" },
        { pos: [0, 2.4, 0.8], text: "Tailwind" },
        { pos: [0.2, 2.1, -0.7], text: "MongoDB" },
        { pos: [-0.6, 2.2, -0.5], text: "Git" },

        // Lower Layer
        { pos: [1.1, 1.8, 0.3], text: "Python" },
        { pos: [-1, 1.7, -0.2], text: "AWS" },
        { pos: [0.4, 1.6, 0.9], text: "Docker" },
        { pos: [-0.3, 1.8, -1], text: "Figma" },
        { pos: [0.7, 1.5, -0.6], text: "Redux" },
        { pos: [-0.8, 1.6, 0.7], text: "Next.js" },
    ];

    return (
        <group position={[0, 1.5, 0]}>
            {/* Trunk */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.4, 3, 8]} />
                <meshStandardMaterial color="#000000" roughness={0.8} />
            </mesh>

            {/* Leaves */}
            {leavesData.map((leaf, index) => (
                <TechLeaf
                    key={index}
                    position={leaf.pos}
                    rotation={[Math.random() * 0.5, Math.random() * Math.PI, 0]} // Random rotation for variation
                    text={leaf.text}
                />
            ))}
        </group>
    );
};

const Planet = () => {
    return (
        <group rotation={[0, 0, 0.2]}> {/* Slight tilt */}
            {/* The Earth */}
            <mesh position={[0, -1.5, 0]}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshStandardMaterial
                    color="#050505" // Dark Black Planet
                    roughness={0.7}
                />
            </mesh>

            {/* Small green patches/islands on the planet to make it look like "Earth" */}
            <mesh position={[1.5, -0.5, 1]} rotation={[0, 0.5, 0]}>
                <dodecahedronGeometry args={[0.8, 0]} />
                <meshStandardMaterial color="#15803d" /> {/* Darker green island */}
            </mesh>
            <mesh position={[-1.2, -1, 1.5]} rotation={[0.4, 0, 0]}>
                <dodecahedronGeometry args={[0.6, 0]} />
                <meshStandardMaterial color="#166534" />
            </mesh>
            <mesh position={[0, -1, -2]} rotation={[0.4, 0, 0]}>
                <dodecahedronGeometry args={[0.9, 0]} />
                <meshStandardMaterial color="#14532d" />
            </mesh>

            {/* The Tree growing from the top */}
            <Tree />
        </group>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-6, 2, 8],
            }}
            className="w-full h-full"
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
                <spotLight position={[-10, 10, 10]} angle={0.5} penumbra={1} intensity={1} color="#22c55e" />

                <OrbitControls
                    autoRotate
                    autoRotateSpeed={1}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Planet />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default EarthCanvas;
