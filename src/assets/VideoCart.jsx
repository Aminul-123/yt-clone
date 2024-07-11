import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../constants/youtube'

function VideoCart({item}) {
  const [ytItem, setYtItem] = useState("");
  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
    //  console.log(res.data.items[0].snippet);
      setYtItem(res.data.items[0].snippet.thumbnails.high.url);
    }
    catch(error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getYoutubeChannelName();
  }, [])
  return (
    <>
    <div className='m-4 w-80 cursor-pointer'>
        <img src={item.snippet.thumbnails.medium.url} alt="image"
        
        className='w-80 rounded-md'
        />
        <div className='w-[90%]'>
          <div className='flex mt-2  gap-2 '>
             <img src={ytItem} alt="profile img" className='h-10 w-10 rounded-full border border-orange-400' />
             <div>
                 <p className='font-semibold w-full'>{item.snippet.title} </p>
                 <p className='text-sm text-gray-700'>{item.snippet.channelTitle} </p>
             </div>

             
          </div>
        </div>
    </div>
    </>
  )
}

export default VideoCart