import React from 'react'

const AboutHero = () => {
  return (
      <div className="relative  mx-auto mt-[50px] customMd:mt-[133px] lg:mt-[184px] lg:max-w-[1280px]">
      <h1 className="text-[60px] font-light leading-[1] tracking-[-2px] lg:text-[80px]">Frontend<br></br>
        <span className="font-bold">Developer</span>
      <div className="mt-6 h-[5px] w-14 bg-customBlack"></div>

      </h1>

        <div className='mt-[50px]'>
      <h2 className='font-bold text-3xl'>About me</h2>
      <p className='text-customGray mt-4'>Hi, I'm Roan Macmillan. I'm a frontend developer looking for a new role. I'm based in Edinburgh and open to working remotely.</p>
      <p className="mt-[30px] font-semibold">Read More</p>
      <div className="mt-[5px] h-[2px] w-24 bg-gray-200"></div>
      </div>

    </div>
  )
}

export default AboutHero
