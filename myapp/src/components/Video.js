import React from "react";

function Video() {
  return (
    <iframe
      className="Video"
      src="https://www.youtube.com/embed/snNKzlu1Tiw"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default Video;
