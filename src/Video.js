
// useRef Info
// The useRef Hook in React can be used to directly access DOM nodes, 
// as well as persist a mutable value across rerenders of a component. 
// When combined with the ref attribute, we could use useRef to obtain the underlying DOM nodes to perform DOM operations imperatively. 
// In fact, this is really an escape hatch.

// The useRef hook is the new addition in React 16.8. 
// Before proceeding to this article there is prequisite to know about the ref in react. 
// The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
// The useRef returns a mutable ref object. This object has a property called .current.

import React, { useRef, useState } from "react";
import "./Video.css"
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar"

// function Video() {
//     const videoRef = useRef(null);
//     const [play,setPlay] = useState(false);
//     const onPress = () => {
//         if(play){
//             videoRef.current.pause();
//             setPlay(false);
//         }
//         else {
//             videoRef.current.play();
//             setPlay(true);
//         }
//     }
//     return(
//         <div className="video">
//             <video
//             className="video_player"
//             loop
//             ref={videoRef}
//             onClick={onPress}
//             src="https://player.vimeo.com/external/519811200.hd.mp4?s=cea463932a0237d2fe31c1399e4bd99a4805e091&profile_id=172&oauth2_token_id=57447761"
//             ></video>
//             <VideoFooter song="despacito" channel="youtube" description="starWalk"/>
//             <VideoSideBar likes={100} shares={200} messages={300} />
//         </div>


//     );
// }

// export default Video;

// import React, { useRef, useState } from "react";
// import VideoFooter from "./VideoFooter";
// import VideoSidebar from "./VideoSidebar";
// import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;