import React from 'react'
import AboutHero from '@/containers/AboutHero'
import SkillsGrid from '@/components/SkillsGrid'
import Footer from '@/components/Footer'

const about = () => {
  return (
    <div className='px-4'>

    <AboutHero />
    <SkillsGrid />
    <Footer title="Let's" emphasizedText='Talk' footerLink='Contact' />

    </div>
  )
}

export default about
