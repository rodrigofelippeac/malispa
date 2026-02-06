import { lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import ScrollProgress from './components/common/ScrollProgress'
import BackToTop from './components/common/BackToTop'
import SkeletonLoader from './components/common/SkeletonLoader'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'

// Lazy load non-critical sections
const GiftCard = lazy(() => import('./components/sections/GiftCard'))
const Contact = lazy(() => import('./components/sections/Contact'))
const GoogleReviews = lazy(() => import('./components/sections/GoogleReviews'))
const InstagramFeed = lazy(() => import('./components/sections/InstagramFeed'))

function App() {
  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* Conteúdo Principal */}
      <main>
        {/* Hero */}
        <Hero />

        {/* Sobre */}
        <About />

        {/* Serviços/Experiências */}
        <Services />

        {/* Lazy loaded sections with skeleton loader */}
        <Suspense fallback={
          <div className="py-20">
            <SkeletonLoader type="card" count={3} />
          </div>
        }>
          {/* Gift Card & Presentes */}
          <GiftCard />

          {/* Contato */}
          <Contact />

          {/* Avaliações Google */}
          <GoogleReviews />

          {/* Instagram Feed */}
          <InstagramFeed />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão WhatsApp Flutuante */}
      <WhatsAppButton />

      {/* Botão Voltar ao Topo */}
      <BackToTop />
    </div>
  )
}

export default App
