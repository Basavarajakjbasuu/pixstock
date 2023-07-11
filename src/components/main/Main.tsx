
import Banners from '../Banner/Banners';
import Photos from '../photos/Photos';

import './main.css';

const Main = () => {
  return (
    <main className='main'>

      <article>
        <Banners />
        <Photos />
      </article>

    </main>
  )
}

export default Main