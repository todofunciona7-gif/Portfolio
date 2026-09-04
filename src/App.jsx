import { MotionConfig } from 'framer-motion'
import CustomCursor from './components/ui/CustomCursor'
import CursorGlow from './components/ui/CursorGlow'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import StatsSection from './components/sections/StatsSection'
import ServicesGrid from './components/sections/ServicesGrid'
import CaseStudies from './components/sections/CaseStudies'
import ProcessTimeline from './components/sections/ProcessTimeline'
import PricingSection from './components/sections/PricingSection'
import StorySection from './components/sections/StorySection'
import FAQSection from './components/sections/FAQSection'
import CTASection from './components/sections/CTASection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-ink font-body text-cream overflow-x-hidden">
        <CustomCursor />
        <CursorGlow />
        <ScrollProgressBar />
        <Navbar />

        <main>
          <Hero />
          <StatsSection />
          <ServicesGrid />
          <CaseStudies />
          <ProcessTimeline />
          <PricingSection />
          <StorySection />
          <FAQSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
