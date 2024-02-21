import React from "react";

const Video = () => {
  return (
    <div className="w-full h-[600px] flex items-center justify-center flex-col">
      <div className="w-[70%] h-[400px] rounded-xl bg-[rgba(18,235,228,0.42)]">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/5bdY017W6o4?si=jSskvvrdLT5Uvxo7?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; muted"
          allowfullscreen
        ></iframe>
      </div>
      <marquee behavior="" direction="ltr" className="mt-[-50px] text-white">
        <p className="text-8xl capitalize">Everton Kayser</p>
      </marquee>
    </div>
  );
};

export default Video;
