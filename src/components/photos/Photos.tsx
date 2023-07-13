import './photos.css';

import { useQuery } from '@tanstack/react-query';

import { client, fetchData } from '../../api/apiConfig';
import Photo from './Photo';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 2,
};

const Photos = () => {

  /**
   * Fetching URL from client obj
   */
  const url = client.photos.curated({ page: 1, per_page: 22});
  
  /**
   * By using useQuery() hook to fetch data 
   */
  const { data, isLoading} = useQuery({
    queryKey: ['apiQuery'],
    queryFn: async () => {
      const data = await fetchData(url)
      return data
    }
  });

  // let isLoading = true;

  return (
    <section className="section featured-photo" aria-label='featured-label'>
      <div className="container">
        
        <h2 className="title-large section-title" id='featured-label'>Featured photos</h2>


        {isLoading ? (
          <div className="media-grid" >
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="column" key={index}>
                <div className="skeleton" />
              </div>
            ))}
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data?.map((photo) => (
              <Photo imageData={photo} key={photo.id} />
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

export default Photos