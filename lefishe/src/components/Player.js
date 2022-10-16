import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);
  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
  }, []);

  return [playing, toggle,audio];
};

const Player = ({ url }) => {
  const [playing, toggle,audio] = useAudio(url);
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  useEffect(() => {
    delay(1000).then(() => {audio.muted = false;});
  }, []);

  return (
    <div>
      <button id="AUDIOBTN" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;