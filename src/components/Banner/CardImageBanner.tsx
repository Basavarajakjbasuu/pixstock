import { CardImageBannerProps } from "../types"


const CardImageBanner = ({ gridArea, imageUrl }: CardImageBannerProps) => {
  return (
    <div
      className="card-banner"
      style={
        {
          "gridArea": `${gridArea}`,
          "backgroundImage": `url(${imageUrl})`
        }
      }
    >
    </div>
  )
}

export default CardImageBanner