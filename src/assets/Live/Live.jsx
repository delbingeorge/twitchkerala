import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'

import Streamer from '../Streamer'


const api = {
  key: "sasy7w6casywfi5ocex43cnnl1axdu"
}

function Live() {

  const [channelInfo, setChannelInfo] = useState({});

  useEffect(() => {
    fetch('https://api.twitch.tv/helix/users?broadcaster_id=141981764', {
      headers: {
        'Client-ID': 'sasy7w6casywfi5ocex43cnnl1axdu',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setChannelInfo(data);

        console.log(channelInfo.data.game_id)
      });
  }, []);


  return (
    <div className='bg-dense px-4 md:px-12 py-32'>

      <a href="https://id.twitch.tv/oauth2/authorize?response_type=token&response_type=token&client_id=sasy7w6casywfi5ocex43cnnl1axdu">Connect with Twitch</a>


      <div className='flex flex-row'>
        <img
          className='w-8 h-8'
          src='https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif?20210202002436' />
        <h1 className='text-white text-2xl font-bold pb-8 pl-4'>look who's streaming!</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {
          Streamer.map((item, key) => {
            return (
              <div
                key={key}
                className='flex items-center bg-white rounded-xl w-full my-2 md:my-0 px-4 py-3'>
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
                  <h2
                    className='font-bold text-lg'>
                    <FontAwesomeIcon
                      className='pr-2'
                      icon={faUser} />{item.view_count}</h2>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default Live