import React from 'react'
import footerImg from '../media/images/footerImg.png'

function Footer() {
     return (
          <footer className='min-h-[50vh] bg-dense text-white flex items-center justify-around px-12'>
               <div className='w-3/6'>
                    <div>
                         <h1 className='text-2xl font-bold text-brand'>together we <br></br>stream.</h1>
                    </div>

                    <ul className='py-8'>
                         <li>Contact</li>
                         <li>Join Us</li>
                    </ul>

                    <ul>
                         <li>Twitter</li>
                         <li>Twitch</li>
                         <li>Discord</li>
                         <li>Youtube</li>
                    </ul>
               </div>
               <div
                    className='w-3/4'>
                    <img
                         src={footerImg} />
               </div>
          </footer>
     )
}

export default Footer