import React from 'react'
import genderlogo from '../gender/download.png'
import offerlogo from '../gender/offer.jpg'

const GenderBanner = () => {
  return (
    <div className='bg-[#FEFEFE] '>
        <div class="h-[30px] bg-gradient-to-b from-[rgb(245,245,245)]"></div>
      <div className= ' my-[20px] h-[400px]'>
      <img  className=""src={genderlogo}></img>
      </div>
      <div className=' m-[70px] my-[90px]'>
      <img  className="h-[220px] w-[2500px]"src={offerlogo}></img>

      </div>
      <div className='flex flex-col items-center mb-[20px]'>
        <div className='text-[40px] text-[#142E8E]'>OMG! DEALS</div>
        <p className='text-[20px] text-[#142E8E]'>MEDAL-WORTHY BRANDS TO BAG</p>
      </div>
    </div>
    
  )
}

export default GenderBanner
