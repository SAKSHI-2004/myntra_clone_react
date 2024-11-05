import React from 'react'
import img1 from '../Categories2/img1.jpg'
import img2 from '../Categories2/img2.png'
import img3 from '../Categories2/img3.png'
import img4 from '../Categories2/img4.png'
import img5 from '../Categories2/img5.png'
import img6 from '../Categories2/img6.png'

const Categories2 = () => {
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
     <div className='flex justify-center my-[25px]'>
        <div className='text-[40px]  text-[#142E8E] font-bold'>SHOP BY CATOGORIES</div>
     </div>
    </div>
  )
}

export default Categories2
