import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const group = useRef()
  const inner = useRef()

  useFrame((state, delta) => {
    const { pointer } = state
    if (group.current) {
      group.current.rotation.y += delta * 0.15
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.35, 0.05)
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, pointer.x * 0.25, 0.05)
    }
    if (inner.current) {
      inner.current.rotation.x -= delta * 0.35
      inner.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={group}>
        {/* outer wireframe shell */}
        <mesh>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshBasicMaterial color="#3EB8F0" wireframe transparent opacity={0.55} />
        </mesh>
        {/* mid torus: duct/ring language */}
        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[2.9, 0.012, 12, 96]} />
          <meshBasicMaterial color="#6ED0FF" transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 1.6, 0.4, 0]}>
          <torusGeometry args={[3.3, 0.008, 12, 96]} />
          <meshBasicMaterial color="#3EB8F0" transparent opacity={0.3} />
        </mesh>
        {/* inner solid core */}
        <mesh ref={inner}>
          <octahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#0D1424" metalness={0.9} roughness={0.2} emissive="#0a2c40" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </Float>
  )
}

function Particles() {
  const count = 220
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 16
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#3EB8F0" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} color="#6ED0FF" />
      <Core />
      <Particles />
    </Canvas>
  )
}
