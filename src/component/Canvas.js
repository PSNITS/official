import React, { useEffect } from 'react'

import * as THREE from "three"






const Canvas = () => {

  let camera
let scene
let renderer
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2




useEffect(()=>{
  init()
animate()

},[])

function init () {
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
    camera.position.z = 500
    const gradientTexture = new THREE.TextureLoader().load("https://nits01asset.s3.amazonaws.com/bg3.jpg");
    scene = new THREE.Scene()
    scene.background=gradientTexture
    // scene.fog = new THREE.FogExp2(0x00ff, 0.001)
    const radius = 1;
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const size = 2000
  
    for ( let i = 0; i < 800; i ++ ) {
      const angle = (i / size) * Math.PI * 2;
      const x = (Math.random(angle) * size + Math.random() * size) / 2 - size / 2 * radius;
      const y = (Math.random(angle) * size + Math.random() * size) / 2 - size / 2 * radius;
      const z = (Math.random(angle) * size + Math.random() * size) / 2 - size / 2 * radius;
  
      vertices.push(x, y, z)
    }


  
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
  
    material = new THREE.PointsMaterial({
      size: 3,
      color: 0x29ABE2,
    })
  
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
  
    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    // renderer.setClearColor(0xfffffff);
    document.body.appendChild(renderer.domElement)
  
    document.body.style.touchAction = 'none'
    document.body.addEventListener('pointermove', onPointerMove)
    window.addEventListener('resize', onWindowResize)
  }
  
  function onWindowResize () {
    windowHalfX = window.innerWidth / 2
    windowHalfY = window.innerHeight / 2
  
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  
  function onPointerMove (event) {
    mouseX = event.clientX - windowHalfX 
    mouseY = event.clientY - windowHalfY
  }
  
  function animate () {
    requestAnimationFrame(animate)
    render()
  }
  
  function render () {
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    scene.rotation.x += 0.001
    scene.rotation.y += 0.002
  }



  return null
}

export default Canvas