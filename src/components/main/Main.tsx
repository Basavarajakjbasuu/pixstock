
import Banners from '../Banner/Banners';
import Photos from '../photos/Photos';
import Videos from '../videos/Videos';

import './main.css';

const Main = () => {
  return (
    <main className='main'>

      <article>
        <Banners />
        <Photos />
        <Videos />
      </article>

    </main>
  )
}

export default Main