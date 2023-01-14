import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import twLogo from '../media/images/twitchkeralaLogo.jpg'

function About() {
     return (
          <div className='bg-white flex items-center justify-center flex-col py-12 md:py-28' id='about-us'>
               < img
                    className='w-24 md:w-32 rounded-full border-dense border-4 hover:shadow-2xl duration-300'
                    src={twLogo} />

               <p className='md:text-2xl font-bold text-center py-6 px-2 md:px-56 leading-7 font-xl md:leading-[2.7rem]'>
                    The Kerala Twitch community is a diverse and thriving group of streamers
                    and viewers from the Indian state of Kerala. They come together to
                    share their passion for gaming, entertainment, and creativity,
                    and offer support and encouragement to one another as they explore the
                    world of live streaming. This community is dedicated to
                    fostering a positive and inclusive environment, making it the perfect place
                    for both experienced and new streamers to connect and grow.
                    Come join the fun and be a part of this amazing community!
               </p>
               <ul className='w-3/4 md:w-1/4 flex items-center justify-between'>
                    <li>
                         <a href='#' >
                              <FontAwesomeIcon
                                   className='social-icon'
                                   icon={faDiscord}
                              />
                         </a>
                    </li>
                    <li>
                         <a href='#'>
                              <FontAwesomeIcon
                                   className='social-icon'
                                   icon={faTwitch}
                              />
                         </a>
                    </li>
                    <li>
                         <a href='#'>
                              <FontAwesomeIcon
                                   className='social-icon'
                                   icon={faTwitter}
                              />
                         </a>
                    </li>
                    <li>
                         <a href='#'>
                              <FontAwesomeIcon
                                   className='social-icon'
                                   icon={faYoutube}
                              />
                         </a>
                    </li>
               </ul>
          </div >
     )
}

export default About