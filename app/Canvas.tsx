'use client'
import { useEffect, useRef } from 'react'

function init(canvas: HTMLCanvasElement) {
  let ctx = canvas.getContext('2d')
  // Background
  ctx.fillStyle = '#cbd5e1'
  ctx.fillRect(0, 0, 1000, 800)

  let animationFrame
  function animate() {
    animationFrame = requestAnimationFrame(animate)

    ctx.font = '100px arial'
    ctx.fillStyle = 'black'

    ctx.fillText('⛰️', 100, 200)
  }
  animate()

  return () => {
    cancelAnimationFrame(animationFrame)
  }
}

export default function Canvas() {
  let canvas = useRef()

  useEffect(() => {
    return init(canvas.current)
  }, [])

  return <canvas height="800" width="1000" ref={canvas}></canvas>
}
