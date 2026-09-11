import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Story from './components/Story'
import Menu from './components/Menu'
import Instagram from './components/Instagram'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-crust">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Story />
        <Menu />
        <Instagram />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  )
}
