import { AudienceProvider } from './components/AudienceContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Doors from './components/Doors'
import Services from './components/Services'
import Process from './components/Process'
import Standards from './components/Standards'
import Programs from './components/Programs'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { StructuredData } from '@/lib/seo'

export default function Home() {
  return (
    <AudienceProvider>
      <Nav />
      <main id="main">
        <div className="container">
          <Hero />
          <Doors />
          <Services />
          <Process />
        </div>
        <Standards />
        <div className="container">
          <Programs />
          <Faq />
          <Contact />
        </div>
      </main>
      <Footer />
      <StructuredData />
    </AudienceProvider>
  )
}
