import axios from "axios";
import { SearchParameters } from "../types";
import { urlEncode } from "../utils/utils";

const API_KEY: string = import.meta.env.VITE_PEXELS_API_KEY;

export const fetchPhotos = async function(url: string): Promise<void>  {
  const headers = {
    'Authorization': API_KEY
  }

  const response = await axios.get(url, { headers });
  return response.data.photos;
}

export const fetchVideos = async function(url: string): Promise<void>  {
  const headers = {
    'Authorization': API_KEY
  }

  const response = await axios.get(url, { headers });
  return response.data.videos;
}

const root = {
  default: 'https://api.pexels.com/v1/',
  videos: 'https://api.pexels.com/videos/'
}

export const client = {

  photos: {

    /**
     * Search photos
     * @param { Object } parameters Url Objects
     */
    search: (parameters: object): string  => {
      const requestUrl =  `${root.default}search?${urlEncode(parameters)}`;
      return requestUrl
    },

    /**
     * Curated Photos
     * @param { Object } parameters Url Objects
     */
    
    curated: (parameters: object): string => {
      const requestUrl = `${root.default}curated?${urlEncode(parameters)}`
      return requestUrl
    },

    /**
     * Get single photo detail
     * @param id Photo ID
     */
    detail(id: string):string {
      const requestUrl = `${root.default}photos/${id}`;
      return requestUrl;
    }

  },

  videos: {

    /**
     * Search videos
     * @param { Object } parameters Url Objects
     */
    search(parameters: SearchParameters) {
      return `${root.videos}search?${urlEncode(parameters)}`;
    },

    /**
     * Get Popular videos
     * @param { Object } parameters Url Objects
     */
    popular: (parameters: object) => {
      return `${root.videos}popular?${urlEncode(parameters)}`
    },

    /**
     * Get single video detail
     * @param id Video ID
     */
    detail(id: string): string {
      return `${root.videos}videos/${id}`
    }

  },

  collections: {

    /**
     * Get featured collections
     * @param { Object } parameters Url Objects
     */
    featured(parameters: object): string {
      return `${root.default}collections/featured?${urlEncode(parameters)}`;
    },

    /**
     * Get a collection media
     * @param id Collection ID
     * @param parameters Url object
     */
    detail(id: string, parameters: object): string {
      return `${root.default}/collections/${id}?${urlEncode(parameters)}`
    }

  },
 

}