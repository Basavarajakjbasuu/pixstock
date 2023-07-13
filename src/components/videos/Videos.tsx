import React from 'react';

import './videos.css';

import Masonry from 'react-masonry-css';

import { client, fetchVideos } from '../../api/apiConfig';
import { useQuery } from '@tanstack/react-query';

import PhotoSkeleton from '../skeleton/PhotoSkeleton';

import { breakpointColumnsObj } from '../utils/utils';
import Video from './video';

const Videos: React.FC = () => {

  const url = client.videos.popular({ per_page: 20 });

  const { data, isLoading} = useQuery({
    queryKey: ['videoAPI'],
    queryFn: async () => {
      const data = await fetchVideos(url)
      return data
    }
  });


  return (
    <section
      className="section popular-video"
      aria-label='popular-video-label'
    >
      <div className="container">
        
        <h2 className="title-large section-title" id="popular-video-label">Popular videos</h2>


        {isLoading ? (
          <div className="media-grid" >
            <PhotoSkeleton type="card" />
          </div>
        ) : (

          <Masonry  
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          >
            {data.map((video) => (
              <Video
                key={video.id}
                videoData={video}
              />
            ))}
          </Masonry>
          
        )}

        <div className="overlay-btn">
          <a href="#" className='btn btn-primary'>
            <span className="label-large text">Explore more</span>

            <div className="state-layer"></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Videos