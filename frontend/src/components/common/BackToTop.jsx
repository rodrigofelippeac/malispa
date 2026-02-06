import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

/**
 * BackToTop - Botão flutuante para voltar ao topo
 * Aparece após scroll > 500px
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 left-4 z-40 bg-gradient-to-br from-gold to-gold-dark text-white rounded-full p-3 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Voltar ao topo"
    >
      <FaArrowUp className="text-lg" />
    </button>
  )
}
