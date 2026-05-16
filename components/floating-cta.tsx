'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clsx from 'clsx'

gsap.registerPlugin(ScrollTrigger)

export default function FloatingCTA() {
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const [currentTone, setCurrentTone] = useState<string>('black')

  useEffect(() => {
    if (!ctaRef.current) return

    // 1. Animación constante de flotación (IDLE)
    const floatAnim = gsap.to(ctaRef.current, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    // 2. Movimiento reactivo al Scroll (Lateral y Rotación)
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const velocity = self.getVelocity() / 200 // Inercia basada en velocidad
        const progress = self.progress
        
        gsap.to(ctaRef.current, {
          x: Math.sin(progress * Math.PI * 6) * 15, // Movimiento lateral en onda
          rotate: Math.max(Math.min(velocity, 5), -5), // Rotación sutil al scrollear
          duration: 0.8,
          ease: "power2.out"
        })
      }
    })

    // 3. Detección de Tono de Sección
    const sections = document.querySelectorAll('section[data-tone]')
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%", // Cuando la sección llega a la altura del botón
        end: "bottom 85%",
        onEnter: () => setCurrentTone(section.getAttribute('data-tone') || 'black'),
        onEnterBack: () => setCurrentTone(section.getAttribute('data-tone') || 'black'),
      })
    })

    return () => {
      floatAnim.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  // Lógica de colores adaptativos
  const isDark = currentTone === 'black' || currentTone === 'red'
  
  return (
    <a
      ref={ctaRef}
      href={`https://wa.me/573192509637?text=${encodeURIComponent("Hello there! I want my red ride ticket...")}`}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "fixed bottom-10 right-8 z-[100] flex items-center gap-3 px-6 py-3",
        "backdrop-blur-md rounded-full shadow-2xl transition-colors duration-500 border",
        isDark 
          ? "bg-white/5 border-white/20 text-white" 
          : "bg-red-500/5 border-red-500/30 text-black"
      )}
    >
      <span className="font-display font-bold tracking-tight text-sm uppercase">
        Request your Ticket
      </span>
      <div className={clsx(
        "w-2 h-2 rounded-full animate-pulse",
        isDark ? "bg-white" : "bg-red-600"
      )} />
    </a>
  )
}
