import React from 'react'

const SkillsGrid = () => {
  return (
    <div className='grid-cols-2 grid mt-[60px] md:grid-cols-4 max-w-[1280px] mx-auto'>

        <div className='border-gray-200 border border-b-0 md:border-b-[1px] h-[240px]'></div>
        <div className='border-gray-200 border border-l-0 border-b-0 md:border-b-[1px] h-[240px]'></div>
        <div className='border-gray-200 border  md:border-l-0 h-[240px]'></div>
        <div className='border-gray-200 border-l-0 border h-[240px]'></div>

      
    </div>
  )
}

export default SkillsGrid
