"use client";
import { useRef, useEffect } from "react";

export default function Project001() {
  type VideoRef = HTMLVideoElement | null;
  const videoRef = useRef(null) as React.MutableRefObject<VideoRef>;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Ajusta a velocidade do vídeo para câmera lenta
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover absolute top-0 left-0 z-10"
      autoPlay
      muted
      loop
      src={require("../../assets/video/video.mp4")}
    />
  );
}
