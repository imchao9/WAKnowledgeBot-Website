'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* eslint-disable react-hooks/purity */

function Particles({ count = 200 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);
            const r = 10 + Math.random() * 10; // Radius between 10 and 20

            const x = r * Math.sin(theta) * Math.cos(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(theta);

            p[i * 3] = x;
            p[i * 3 + 1] = y;
            p[i * 3 + 2] = z;
        }
        return p;
    }, [count]);

    const ref = useRef<THREE.Points>(null!);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.length / 3}
                    array={points}
                    itemSize={3}
                    args={[points, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color="#25D366"
                transparent
                opacity={0.6}
                sizeAttenuation={true}
            />
        </points>
    );
}

function Connections({ count = 100 }) {
    const lines = useMemo(() => {
        const points: THREE.Vector3[] = [];
        for (let i = 0; i < count; i++) {
            const start = new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            );
            const end = new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            );
            // Verify distance is reasonable to look like a network
            if (start.distanceTo(end) < 10) {
                points.push(start);
                points.push(end);
            }
        }

        const linePositions = new Float32Array(points.length * 3);
        for (let i = 0; i < points.length; i++) {
            linePositions[i * 3] = points[i].x;
            linePositions[i * 3 + 1] = points[i].y;
            linePositions[i * 3 + 2] = points[i].z;
        }
        return linePositions;
    }, [count]);


    const ref = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = -state.clock.getElapsedTime() * 0.02;
            ref.current.rotation.y = -state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={ref}>
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={lines.length / 3}
                        array={lines}
                        itemSize={3}
                        args={[lines, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#25D366"
                    transparent
                    opacity={0.15}
                    linewidth={1}
                />
            </lineSegments>
        </group>
    );
}

import { Canvas } from '@react-three/fiber';

export default function ParticleNetwork() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <group>
                    <Particles />
                    <Connections />
                </group>
            </Canvas>
        </div>
    );
}
