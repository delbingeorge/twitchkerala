import React from 'react'
import twLogo from '../media/images/twitchkeralaLogo.jpg'

function Nav() {
     return (
          <div className='bg-brand px-6 py-3 md:flex md:justify-end hidden '>
               <div className='flex items-center'>
                    <img
                         className='rounded-full border-white border-[4px] w-16 mr-4'
                         src={twLogo} />
                    <div className='flex flex-col'>
                         <h1 className='text-white font-bold text-2xl'>twitchkerala</h1>
                         <span className='bg-white w-16 rounded-2xl text-base font-bold text-red-500 text-center'>live</span>
                    </div>
               </div>
          </div>
     )
}

export default Nav