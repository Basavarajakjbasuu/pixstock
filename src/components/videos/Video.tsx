import React from 'react'

import { MdFavoriteBorder, MdOutlinePlayArrow } from 'react-icons/md';

import { VideoData } from '../../types';

const Video = ({ videoData }: { videoData: VideoData}) => {
  
  const {
    height,
    width,
    id,
    image,
    video_files
  } = videoData;

  const sdVideo = video_files.find(item => item.quality === "sd" && item.width < 1000);

  const { link } = sdVideo;

  return (
    <div className="card video grid-item">

            <div
              className="card-banner"
              style={{ "--width": {width}, "--height": {height} } as React.CSSProperties}
            >
              <video
                src={link}
                poster={image}
                muted
                loop
                preload='none'
                className="img-cover"
              >
              </video>
            </div>

            <div className="card-content">

              <button
                className="icon-btn small"
                aria-label='Add to your favorites'
              // onClick={() => handleFavoriteClick(id, 'photos' )}
              >
                <span><MdFavoriteBorder /></span>
                <div className="state-layer"></div>
              </button>

            </div>

            <span className="card-badge">
              <MdOutlinePlayArrow style={{ "fontSize": "1.8rem" }} />
            </span>

          </div>
  )
}

export default Video 