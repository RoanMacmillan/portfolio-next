import React from 'react'
import AboutHero from '@/containers/AboutHero'
import SkillsGrid from '@/components/SkillsGrid'
import Footer from '@/components/Footer'
import ServicesContainer from '@/containers/ServicesContainer'
import ScrollToTop from '@/components/ScrollToTop'

const about = () => {
  return (
    <div className=''>

    <ScrollToTop />
    <AboutHero />
    <SkillsGrid />
    <ServicesContainer />
    <div className='px-4 customMd:px-20 max-w-[1440px] mx-auto'>
    <Footer title="Let's" emphasizedText='Talk' footerLink='Contact' link='/contact' />
    </div>

    </div>
  )
}

export default about
