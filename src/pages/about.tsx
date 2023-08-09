import React from 'react'
import AboutHero from '@/containers/AboutHero'
import SkillsGrid from '@/components/SkillsGrid'
import Footer from '@/components/Footer'
import ServicesContainer from '@/containers/ServicesContainer'
import ScrollToTop from '@/components/ScrollToTop'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'


const about = () => {

  const [dividerRef, dividerRefVisible] = useIntersectionObserver();


  return (
    <div className=''>
      <div ref={dividerRef} className={`absolute left-0 top-0 h-1 bg-customBlack ${dividerRefVisible ? 'w-full transition-all duration-[650ms]' : 'w-0'}`}></div>

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
