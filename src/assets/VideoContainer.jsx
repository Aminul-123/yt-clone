import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {API_KEY, YOUTUBE_VIDEO_API} from '../constants/youtube'
import VideoCart from './VideoCart'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setHomeVideo } from '../utils/appSlice'

function VideoContainer() {
  const [video, setVideo] = useState([])
  const videoAll = useSelector((store) => store.app.video)
const dispatch = useDispatch()
  //useEffect -> use network call mostly
  const fetchYoutubeVideo = async () => {
   try {

  

    const res = await axios.get(YOUTUBE_VIDEO_API)
   // console.log(res?.data?.items)
    setVideo(res?.data?.items)
    dispatch(setHomeVideo(res?.data?.items))
  } catch (error) {
    console.log(error)
    }
  }
  // Now I will deploy it in vercel
  const fetchVideoByCategory = async() => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=${API_KEY}`)
     //console.log(res.data)
    }
    catch(error) {
      console.log(error)
    }
  }
  useEffect(() => {
   fetchYoutubeVideo()
   fetchVideoByCategory()
  }, [])
  return (
    <>
    <div className='grid grid-cols-3 mt-20'>
      {
        video.map((item) => {
          return (
            <Link  key={item.id}  to={`/watch?v=${item.id}`}>
                 <VideoCart item={item} />
            </Link>
          
          )
        })
      }
   
   
    </div>
   
    </>
  )
}

export default VideoContainer