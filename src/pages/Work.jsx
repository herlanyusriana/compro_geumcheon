import { OurWorksSection } from '../components/OurWorksSection'
import { OurProjectsSection } from '../components/OurProjectsSection'

export function Work() {
  return (
    <div className="flex flex-col">
      <OurWorksSection />
      <OurProjectsSection />
    </div>
  )
}
