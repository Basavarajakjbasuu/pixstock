import './photos.css';

import img10 from '../../assets/images/card-media-10.jpg'
import { MdOutlineFavorite } from 'react-icons/md';

const Photos = () => {
  return (
    <section className="section featured-photo" aria-label='featured-label'>
      <div className="container">
        
        <h2 className="title-large section-title" id='featured-label'>Featured photos</h2>

          <div className="media-grid">

            <div className="column">
            
              <div className="card gird-item">

                <figure
                  className='card-banner'
                  style={{"--width": '160', "--height": '121'} as React.CSSProperties}
                >
                  <img
                    src={img10}
                    width={160}
                    height={121}
                    loading='lazy'
                    className='img-cover'
                    alt=""
                  />
                </figure>

                <div className="card-content">

                  <button className="icon-btn small" aria-label='Add to your favorites'>
                    <span><MdOutlineFavorite /></span>
                    <div className="state-layer"></div>
                  </button>

                </div>


              </div>

              <div className="card gird-item">

                <figure
                  className='card-banner'
                  style={{"--width": '160', "--height": '121'} as React.CSSProperties}
                >
                  <img
                    src={img10}
                    width={160}
                    height={121}
                    loading='lazy'
                    className='img-cover'
                    alt=""
                  />
                </figure>

                <div className="card-content">

                  <button className="icon-btn small" aria-label='Add to your favorites'>
                    <span><MdOutlineFavorite /></span>
                    <div className="state-layer"></div>
                  </button>

                </div>


              </div>
            
              <div className="card gird-item">

                <figure
                  className='card-banner'
                  style={{"--width": '160', "--height": '121'} as React.CSSProperties}
                >
                  <img
                    src={img10}
                    width={160}
                    height={121}
                    loading='lazy'
                    className='img-cover'
                    alt=""
                  />
                </figure>

                <div className="card-content">

                  <button className="icon-btn small" aria-label='Add to your favorites'>
                    <span><MdOutlineFavorite /></span>
                    <div className="state-layer"></div>
                  </button>

                </div>


              </div>
            
            </div>
          
            <div className="column">
            
              <div className="card gird-item">

                <figure
                  className='card-banner'
                  style={{"--width": '160', "--height": '121'} as React.CSSProperties}
                >
                  <img
                    src={img10}
                    width={160}
                    height={121}
                    loading='lazy'
                    className='img-cover'
                    alt=""
                  />
                </figure>

                <div className="card-content">

                  <button className="icon-btn small" aria-label='Add to your favorites'>
                    <span><MdOutlineFavorite /></span>
                    <div className="state-layer"></div>
                  </button>

                </div>


              </div>

              <div className="card gird-item">

                <figure
                  className='card-banner'
                  style={{"--width": '160', "--height": '121'} as React.CSSProperties}
                >
                  <img
                    src={img10}
                    width={160}
                    height={121}
                    loading='lazy'
                    className='img-cover'
                    alt=""
                  />
                </figure>

                <div className="card-content">

                  <button className="icon-btn small" aria-label='Add to your favorites'>
                    <span><MdOutlineFavorite /></span>
                    <div className="state-layer"></div>
                  </button>

                </div>


              </div>
            
              <div className="card gird-item">

                <figure
                  className='card-banner'
                  style={{"--width": '160', "--height": '121'} as React.CSSProperties}
                >
                  <img
                    src={img10}
                    width={160}
                    height={121}
                    loading='lazy'
                    className='img-cover'
                    alt=""
                  />
                </figure>

                <div className="card-content">

                  <button className="icon-btn small" aria-label='Add to your favorites'>
                    <span><MdOutlineFavorite /></span>
                    <div className="state-layer"></div>
                  </button>

                </div>


              </div>
            q
            </div>
          
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