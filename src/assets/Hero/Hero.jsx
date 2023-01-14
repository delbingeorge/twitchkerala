import React from 'react'
import { Link } from 'react-scroll'

function Hero() {
     return (
          <div className='bg-brand flex flex-col items-center justify-center py-56 px-4'>
               <h1 className='text-2xl font-bold text-white text-center'>twitch kerala</h1>
               <h1 className='text-5xl md:text-8xl font-black text-black text-center'>together we <br></br><span className='anime'>stream.</span></h1>
               <Link to='about-us' delay={300} smooth={true}>
                    <img
                         className='w-12 pt-8 hover:cursor-pointer jump'
                         src='https://cdn-icons-png.flaticon.com/512/271/271210.png' alt='down arrow' />
               </Link>
          </div>
     )
}

export default Hero