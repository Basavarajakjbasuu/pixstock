import React, { useEffect } from 'react';

import './photos.css';

import { useQuery } from '@tanstack/react-query';

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { client, fetchData } from '../../api/apiConfig';
import { handleFavoriteClick } from '../../utils/utils';

const Photos = () => {

  /**
   * Fetching URL from client obj
   */
  const url = client.photos.curated({ page: 1, per_page: 20 });
  
  /**
   * By using useQuery() hook to fetch data 
   */
  const { data, isLoading } = useQuery({
    queryKey: ['apiQuery'],
    queryFn: async () => {
      const data = await fetchData(url)
      return data 
    }
  })

  /**
   * Implementing Favorite to store data in local storage
   * @param id Photo ID
   * @param type Type of media Photo or video
   */

  const [favorites, setFavorites] = React.useState([]);

  const handleFavoriteClick = (item) => {
    // Retrieve existing favorites from local storage
    const existingFavorites = localStorage.getItem('favorites') || '[]';
    const storedFavorites = JSON.parse(existingFavorites);

    const updatedFavorites = [...favorites];
    const index = updatedFavorites.findIndex((fav) => fav.id === item.id && fav.type === item.type);

    if (index === -1) {
      // Add to favorites if not already present
      updatedFavorites.push(item);
    } else {
      // Remove from favorites if already present
      updatedFavorites.splice(index, 1);
    }

    // Update favorites in local storage and state
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    const existingFavorites = localStorage.getItem('favorites');
    if (!existingFavorites) {
      localStorage.setItem('favorites', JSON.stringify({ photos: [], videos: [] }));
    }
  }, []);


  return (
    <section className="section featured-photo" aria-label='featured-label'>
      <div className="container">
        
        <h2 className="title-large section-title" id='featured-label'>Featured photos</h2>

        <div className="media-grid">

          {
            isLoading && (
              <>
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
              </>
            )
          }
            
            {data ? (
              data?.map(({
                alt,
                avg_color: backdropColor,
                width,
                height,
                id,
                src: { large }
              }: ImageData) => (
                
                <div className="column" key={id}>
                  <div className="card gird-item" style={{ 'backgroundColor' : backdropColor}}>

                    <figure
                      className='card-banner'
                      style={{"--width": {width}, "--height": {height}} as React.CSSProperties}
                      >
                      <img
                        src={large}
                        width={width}
                        height={height}
                        loading='lazy'
                        className='img-cover'
                        alt={alt}
                      />
                    </figure>

                    <div className="card-content">

                      <button
                        className="icon-btn small"
                        aria-label='Add to your favorites'
                        onClick={() => handleFavoriteClick(id, 'photos' )}
                      >
                        <span><MdFavoriteBorder /></span>
                        <div className="state-layer"></div>
                      </button>

                    </div>


                  </div>
                </div>
              ))  
            ): null}
              
          </div>

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