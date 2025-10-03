import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Work } from './pages/Work'
import { Partners } from './pages/Partners'
import { Contact } from './pages/Contact'
import { ServiceDetail } from './pages/work/ServiceDetail'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-theme-blue">
      <ScrollToTop />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-gradient-to-b from-light-theme-purple/60 via-white/0 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-[-15%] hidden w-2/5 rounded-full bg-light-theme-purple/40 blur-3xl lg:block" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ServiceDetail />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  )
}

export default App
