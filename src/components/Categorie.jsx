import React from 'react'
import img1 from '../Categories/img1.png'
import img2 from '../Categories/img2.png'
import img3 from '../Categories/img3.png'
import img4 from '../Categories/img4.png'
import img5 from '../Categories/img5.png'
import img6 from '../Categories/img6.png'


const Categorie = () => {
  return (
    <div>
      <div className='flex flex-row '>
      

        <div>
        <img  className=""src={img1}></img>

        </div>
        <div>
        <img  className=""src={img2}></img>

        </div>
        <div>
        <img  className=""src={img3}></img>

        </div>
        <div>
        <img  className=""src={img4}></img>

        </div>
        <div>
        <img  className=""src={img5}></img>

        </div>
        <div>
        <img  className=""src={img6}></img>

        </div>
      </div>
      <div className='flex flex-col items-center mb-[20px] mt-[30px]'>
        <div className='text-[40px] text-[#142E8E]'>FOR THE LOVE OF SIBLINGS</div>
        <p className='text-[20px] text-[#142E8E]'>RAKSHADHANDHAN GIFTS THIS WAY</p>
      </div>
    </div>
  )
}

export default Categorie
