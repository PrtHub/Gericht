import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

 const handlePlay = () => {
   setPlayVideo((prevPlayVideo) => !prevPlayVideo);

   if(playVideo){
    vidRef.current.pause();
   } else{
    vidRef.current.play();
   }
 } 

  return (
    <div className='app__video app__bg'>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />

      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handlePlay}>

         {playVideo ? <BsPauseFill color='#fff' fontSize={30}/> : <BsFillPlayFill color='#fff' fontSize={30}/>}

        </div>
      </div>
    </div>
  )
}

export default Intro;
