export interface CardImageBannerProps {
  id: number;
  imageUrl: string;
  gridArea: string;
}

export interface CardVideoBannerProps {
  id: number;
  videoUrl: string;
  gridArea: string;
  height: number;
  width: number;
}

export interface BannerProps {
  heading: string;
  description: string;
  index: string;
  cardImageData?: CardImageBannerProps[];
  cardVideoData?: CardVideoBannerProps[];
}


export interface CardImageDataTypes {
  id: number;
  imageUrl: string;
  gridArea?: string;
}

export interface CardVideoDataTypes {
  id: number;
    gridArea: string;
    url: string;
    width: number;
    height: number;
}

