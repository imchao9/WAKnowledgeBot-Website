'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 200 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    const ref = useRef<THREE.Points>(null!);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00A884"
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

// Simple connections for visual effect - simplified to static lines for performance
function Connections({ count = 50 }) {
    const lines = useMemo(() => {
        const points = [];
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
        return points;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    const ref = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group ref={ref}>
            <Line
                points={lines}
                color="#00A884"
                opacity={0.15}
                transparent
                lineWidth={0.5}
            />
        </group>
    );
}

export default function ParticleNetwork() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50">
            <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Particles count={200} />
                <Connections count={100} />
            </Canvas>
        </div>
    );
}
