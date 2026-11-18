import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 1. Kinetic Icosahedron Wireframe Mesh
    const geometry = new THREE.IcosahedronGeometry(12, 4);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      roughness: 0.2,
      metalness: 0.8,
    });
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);

    // 2. Inner Glowing Core Particle Swarm
    const particlesCount = 700;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const c1 = new THREE.Color(0x38bdf8); // Cyan
    const c2 = new THREE.Color(0x818cf8); // Indigo
    const c3 = new THREE.Color(0x34d399); // Emerald

    for (let i = 0; i < particlesCount; i++) {
      const radius = 6 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() < 0.4 ? c1 : Math.random() < 0.7 ? c2 : c3;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 50);
    pointLight.position.set(10, 15, 15);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2, 50);
    purpleLight.position.set(-15, -10, 10);
    scene.add(purpleLight);

    // Interactive Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      icosahedron.rotation.x = elapsedTime * 0.08 + targetY * 0.3;
      icosahedron.rotation.y = elapsedTime * 0.1 + targetX * 0.3;

      particles.rotation.x = -elapsedTime * 0.05 - targetY * 0.2;
      particles.rotation.y = -elapsedTime * 0.06 - targetX * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
    />
  );
}
