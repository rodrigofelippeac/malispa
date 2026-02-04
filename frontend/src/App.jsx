import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import GiftCard from './components/sections/GiftCard'
import Contact from './components/sections/Contact'
import GoogleReviews from './components/sections/GoogleReviews'
import InstagramFeed from './components/sections/InstagramFeed'

function App() {
  return (
    <div className="min-h-screen">
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

        {/* Gift Card & Presentes */}
        <GiftCard />

        {/* Contato */}
        <Contact />

        {/* Avaliações Google */}
        <GoogleReviews />

        {/* Instagram Feed */}
        <InstagramFeed />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão WhatsApp Flutuante */}
      <WhatsAppButton />
    </div>
  )
}

export default App
