import { useEffect, useState } from 'react'
import { MotionConfig, motion, AnimatePresence } from 'framer-motion'
import Loader from './components/ui/Loader'
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minTime = new Promise((resolve) => setTimeout(resolve, 1100))
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve()
    const windowLoaded =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }))

    Promise.all([minTime, fontsReady, windowLoaded]).then(() => setLoading(false))
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <CursorGlow />

      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[200] bg-ink flex items-center justify-center"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: loading ? 0 : 0.1 }}
        className="relative bg-ink font-body text-cream overflow-x-hidden"
      >
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
      </motion.div>
    </MotionConfig>
  )
}
