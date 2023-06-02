import React, { useEffect, useRef } from "react"
import * as THREE from "three"

function ParticleEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // シーンを作成
    const scene = new THREE.Scene()

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // パーティクルの数
    const particleCount = 1000

    // パーティクルジオメトリを作成
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = Math.random() * 10 - 5 // x座標
      particlePositions[i + 1] = Math.random() * 10 - 5 // y座標
      particlePositions[i + 2] = Math.random() * 10 - 5 // z座標
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    )

    // パーティクルマテリアルを作成
    const particleMaterial = new THREE.PointsMaterial({ size: 0.1 })

    // パーティクルオブジェクトを作成
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // アニメーションループ
    function animate() {
      requestAnimationFrame(animate)

      // パーティクルを回転させるなどのアニメーション処理を追加

      renderer.render(scene, camera)
    }

    animate()

    // ウィンドウのリサイズ時にカメラとレンダラーのサイズを更新
    function handleWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener("resize", handleWindowResize)

    // アンマウント時にイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener("resize", handleWindowResize)
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="h-full w-full" />
}

export default ParticleEffect
