import { Hero } from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { VisionMission } from '../components/VisionMission'
import { CertificationsSection } from '../components/CertificationsSection'
import { ClientsSection } from '../components/ClientsSection'
import { ValuePillars } from '../components/ValuePillars'

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
      <VisionMission />
      <CertificationsSection />
      <ClientsSection />
      <ValuePillars />
    </div>
  )
}
