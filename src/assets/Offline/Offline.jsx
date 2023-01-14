import React from 'react'

import Streamer from '../Streamer'
function Offline() {
     return (
          <div className='bg-white px-4 md:px-12 py-32'>
               <h1 className=' text-dense text-2xl font-bold pb-8'>Offline streamer</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                    {
                         Streamer.map((item, key) => {
                              return (
                                   <div
                                        key={key}
                                        className='flex items-center bg-[#f3f1fa] rounded-xl w-full my-2 md:my-0 px-4 py-3'>
                                        <div className=''>
                                             <img
                                                  className='rounded-full'
                                                  src={item.img} />
                                        </div>
                                        <div className='pl-4'>
                                             <a
                                                  className='hover:text-brand font-bold text-xl'
                                                  href={item.link}
                                                  target="_blank"
                                             >{item.username}</a>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div>
          </div >
     )
}

export default Offline