import './watch.scss'
import { FaArrowLeft } from "react-icons/fa";
import myVideo from './videos/myvideo.mp4'

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
             <FaArrowLeft/>
             Home
        </div>
        <video
        className="video"
        progress 
        controls
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
          src={myVideo}
      />
    </div>
  )
}

export default Watch
