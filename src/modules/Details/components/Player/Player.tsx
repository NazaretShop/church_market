import React, { FC, useRef, useState } from "react";

import {
  IconArrowExpand,
  IconCompress,
  IconPause,
  IconPlay,
  IconReload,
  IconVolumeMute,
  IconVolumeUp,
} from "@/common/components/icons";

import {
  Button,
  Controls,
  Range,
  SideControls,
  Video,
  Wrapper,
} from "./styles";

const VideoPlayer: FC<{ link: string }> = ({ link }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLooping, setIsLooping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLoop = () => {
    setIsLooping(!isLooping);
    if (videoRef.current) {
      videoRef.current.loop = !isLooping;
    }
  };

  const handleFullScreen = () => {
    if (videoContainerRef.current) {
      if (!isFullScreen) {
        setIsOpen(true);
        videoContainerRef.current.requestFullscreen();
        setIsFullScreen(true);
      } else {
        setIsOpen(false);
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
    if (videoRef.current) {
      videoRef.current.volume = parseFloat(event.target.value);
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <Wrapper ref={videoContainerRef}>
      <Video
        isOpen={isOpen}
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={link} />
      </Video>

      <Controls className="controls">
        <Button onClick={handlePlayPause}>
          {isPlaying ? <IconPause /> : <IconPlay />}
        </Button>
        <Range
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        {volume > 0 ? <IconVolumeUp /> : <IconVolumeMute />}
        <SideControls>
          <Button onClick={handleLoop}>
            {isLooping ? <IconReload /> : <IconReload />}
          </Button>
          <Button onClick={handleFullScreen}>
            {isFullScreen ? <IconCompress /> : <IconArrowExpand />}
          </Button>
        </SideControls>
      </Controls>
    </Wrapper>
  );
};

export default VideoPlayer;
