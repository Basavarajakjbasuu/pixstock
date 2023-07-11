import { Banner } from ".."
import { banner1Data, banner2Data, banner3Data,  cardImageBannerData, cardImageBannerData2, cardVideoBannerData } from "../constant"

const Banners = () => {
  return (
    <section className="banner" aria-label="Banner">
      <Banner
        heading={banner1Data.heading}
        description={banner1Data.desc}
        cardImageData={cardImageBannerData}
        index={banner1Data.index}
      />
      <Banner
        heading={banner2Data.heading}
        description={banner2Data.desc}
        cardVideoData={cardVideoBannerData}
        index={banner2Data.index}
      />  
      <Banner
        heading={banner3Data.heading}
        description={banner3Data.desc}
        cardImageData={cardImageBannerData2}
        index={banner3Data.index}
      />
    </section>
  )
}

export default Banners