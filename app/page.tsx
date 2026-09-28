import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { BrandsSection } from '@/components/brands-section'
import { HistorySection } from '@/components/history-section'
import { SustainabilitySection } from '@/components/sustainability-section'
import { CareersSection } from '@/components/careers-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <BrandsSection />
        <HistorySection />
        <SustainabilitySection />
        <CareersSection />
      </main>
      <SiteFooter />
    </>
  )
}
