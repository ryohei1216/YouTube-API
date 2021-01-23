import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import { fetchSelectedData } from '../../apis/index'



const VideoDetail = () => {
  const location =useLocation()
  const setSelectedVideos = async() => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    await fetchSelectedData(id).then((res) => {

    })
  }
  useEffect(() => {
    
    setSelectedVideos()
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default VideoDetail
