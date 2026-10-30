import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const Scene = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#05060a')

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
    camera.position.set(0, 0, 8)

    const starGeometry = new THREE.BufferGeometry()
    const count = 2000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < positions.length; i += 1) {
      positions[i] = (Math.random() - 0.5) * 80
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMaterial = new THREE.PointsMaterial({
      color: '#ffffff',
      size: 1.5,
      sizeAttenuation: false,
    })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    const bodyGeometry = new THREE.IcosahedronGeometry(1.4, 1)
    const bodyMaterial = new THREE.MeshBasicMaterial({
      color: '#9bb7ff',
      wireframe: true,
    })
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    scene.add(body)

    const resize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight
      if (width === 0 || height === 0) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
    }
    resize()

    const observer = new ResizeObserver(resize)
    observer.observe(mount)

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      body.rotation.y += 0.004
      body.rotation.x += 0.001
      stars.rotation.y += 0.0004
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      starGeometry.dispose()
      starMaterial.dispose()
      bodyGeometry.dispose()
      bodyMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="h-full w-full" />
}
