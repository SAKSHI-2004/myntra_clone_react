import React from 'react'
import img1 from '../Osstore/img1.png'
import img2 from '../Osstore/img2.png'

const Footer = () => {
  return (
    <div>
       <div className='flex bg-[#FAFBFC] pt-[20px]'>
        <div className='basis-1/6 pl-[30px]'>
            <div>
                <div>
                    <p className='mb-[40px] font-bold'>ONLINE SHOPPING</p>
                    <ul className='mb-[40px] font-light'>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Home & Living</li>
                        <li>Beauty</li>
                        <li>Gift Card</li>
                        <li>Myntra Insider</li>
                    </ul>
                </div>

            </div>
            <div>
            <div>
                    <p className='mb-[40px] font-bold'>USEFUL LINKS</p>
                    <ul className='mb-[40px] font-light'>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Site Map</li>
                        <li>Corporate Information</li>
                        <li>Whitehat</li>
                        <li>Cleartrip</li>
                        
                    </ul>
                </div>
            </div>
            </div>
        <div className='basis-1/6'>
        <div>
                    <p className='mb-[40px] font-bold'>CUSTOMERS POLICIES</p>
                    <ul className='mb-[40px] font-light'>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>T&C</li>
                        <li>Terms Of Uses</li>
                        <li>Track Orders</li>
                        <li>Shopping</li>
                        <li>Cancellation</li>
                        <li>Returns</li>
                        <li>Private Policy</li>
                        <li>Grievance Officers</li>
                    </ul>
                </div>
            

        </div>
        <div className='basis-1/3'>
            <div>
                <p className='mb-[40px] font-bold'>EXPERIENCE MYNTRA APP ON MOBILE</p>
                <div className='flex mb-[40px]'>
                <img  className="pr-[10px]"src={img1}></img>
                <img  className="pr-[10px]"src={img2}></img>
               
                </div>
            </div>
            <div>
                <p className='mb-[40px] font-bold'>KEEP IN TOUCH</p>
                <div className='flex'>
                <svg className='w-[35px] h-[30px] mr-[10px]'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                <svg  className='w-[35px] h-[30px] mr-[10px]'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                
                <svg  className='w-[35px] h-[30px] mr-[10px]'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"/></svg>
                <svg  className='w-[35px] h-[30px] mr-[10px]'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
                </div>
            </div>
        </div>
        <div className='basis-1/3'>
            <div >
                <div className='ml-[25px] mb-[20px]'>
                    <p className='font-bold'>100% ORIGINAL</p><p className='font-light'> guarantee for <br></br> all products at myntra.com</p>
                </div>
                <div className='ml-[25px]'>
                    <p className='font-bold'>Return within 14days </p><p className='font-light'>of receiving your order</p>
                </div>
            </div>

            
            </div>
       </div>
    </div>
  )
}

export default Footer
