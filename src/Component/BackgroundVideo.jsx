import React from "react";

export default function BackgroundVideo({ 
  src, 
  type = "video/mp4",
  overlay = true,
  overlayOpacity = "bg-black/45"
}) {
  return (
    <div className="absolute inset-0 w-full h-[1085px]">
      
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type={type} />
      </video>

      {/* Overlay */}
      {overlay && (
        <div className={`absolute inset-0 ${overlayOpacity}`} />
      )}
      
    </div>
  );
}
