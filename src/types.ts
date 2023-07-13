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

export type SuccessCallback<T> = (data: T) => void;

export type FetchDataOptions = {
  method?: string;
  headers?: Headers | string[][] | Record<string, string>;
  body?: BodyInit;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal | null;
  window?: any;
};

export type SearchParameters = {
  searchTerm: string;
};

export type SearchCallback = (data: any) => void;

export type callback = (data: any) => void;

export interface Parameters {
  [key: string]: any;
}

export interface ImageData {
  alt: string;
  avg_color: string;
  width: number;
  height: number;
  id?: number;
  src: {
    large: string;
  };
}