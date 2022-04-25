import React, { useEffect, useState } from 'react'

export const Menssage = () => {

  const [{x, y}, setCoors] = useState({ x: 0, y: 0})
  
  useEffect(() => {
    
      const mouseMove = (e) => {
        setCoors({ x: e.x, y: e.y})
      }

      window.addEventListener('mousemove', mouseMove )
    
      return () => {
        window.removeEventListener('mousemove', mouseMove);
      }
  }, [])
  
  return (
    <>
      <div>Coordenada X: { x }</div>
      <div>Coordenada Y: { y }</div>
    </>
  )
}
