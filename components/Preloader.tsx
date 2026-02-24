'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="preloader" id="preloader">
      <div className="loader"></div>
    </div>
  )
}
