import React, {useRef, useState} from 'react'
import './components-css/Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
const Video = ({url, channel, description, song, likes, shares, messages}) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
        // if video is playing
        // stop it...


        // otherwise if its not playing
        // play it...
    }

  return (
    <div className='video'>
        {/* Video */}
        <video
        onClick={handleVideoPress}
         loop
        ref={videoRef}
        className='video_player'
         src={url}></video>

        {/* Videofooter */}
        <VideoFooter channel={channel} description={description} song={song}/>

        {/* VideoSidebar */}
        <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  )
}

export default Video