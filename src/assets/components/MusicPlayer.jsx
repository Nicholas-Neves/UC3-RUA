import React, { useRef, useState, useEffect } from "react";
import "./MusicPlayer.css";

const playlist = [
  {
    src: "/music/Police Truck.mp3",
    title: "Police Truck",
    src: "/music/She's in Parties.mp3",
    title: "Shes in Parties",
    src: "/music/Skate & Destroy.mp3",
    title: "Skate & Destroy",
    src: "/music/Kim Wilde - Kids in America (Official Music Video).mp3",
    title: "Kids in America",
    src: "/music/Kavinsky - Nightcall (Drive Original Movie Soundtrack) (Official Audio).mp3",
    title: "Nightcall",
    src: "/music/I Wanna Be Your Dog.mp3",
    title: "I Wanna Be Your Dog",
  },
];

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="music-icon" onClick={togglePlay}>
        {isPlaying ? "❚❚" : "▶"}
      </div>
      <audio ref={audioRef} loop>
        <source src={playlist[0].src} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicPlayer;
