import { useState, useEffect } from 'react'

/**
 * ScrollProgress - Barra de progresso de scroll no topo
 * Indicador visual de quanto o usuário scrollou
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = (scrolled / documentHeight) * 100

      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold-dark z-50 transition-all duration-150"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}
