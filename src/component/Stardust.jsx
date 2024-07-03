import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame} from "react"
import { Points, PointMaterial, Preload } from "@react-three/fiber"
import *as random from "maath/random/dist/maath.random.esm"

export default function Stardust() {
  const ref = useRef()
  const [sphere] = useState(() => {
    random.inSphere(new Float32Array(5000), (radius: '1.2'))
  })
  return (
    <div className="">

    </div>
  )
}
