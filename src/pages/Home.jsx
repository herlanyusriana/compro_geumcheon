import { Hero } from '../components/Hero'
import { PrimaryServicesSection } from '../components/PrimaryServicesSection'
import { AboutSection } from '../components/AboutSection'
import { VisionMission } from '../components/VisionMission'
import { CertificationsSection } from '../components/CertificationsSection'
import { ClientsSection } from '../components/ClientsSection'
import { ValuePillars } from '../components/ValuePillars'
import { PhotoShowcase } from '../components/PhotoShowcase'

export function Home() {
  return (
    <div className="flex flex-col bg-white text-theme-blue">
      <Hero />
      <PrimaryServicesSection />
      <AboutSection />
      <PhotoShowcase />
      <VisionMission />
      <CertificationsSection />
      <ClientsSection />
      <ValuePillars />
    </div>
  )
}
