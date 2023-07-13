import axios from "axios";
import { SearchCallback, SearchParameters, SuccessCallback, callback } from "../types";
import { urlEncode } from "../utils/utils";

const API_KEY: string = import.meta.env.VITE_PEXELS_API_KEY;

export const fetchData = async function(url: string): Promise<void>  {
  const headers = {
    'Authorization': API_KEY
  }

  const response = await axios.get(url, { headers });
  return response.data.photos;
}

let requestUrl = "";

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
     * @param { Function } callback Callback Function
     */
    search(parameters: SearchParameters, callback: SearchCallback): void {
      requestUrl = `${root.videos}search?${urlEncode(parameters)}`;
      fetchData(requestUrl, callback);
    },

    /**
     * Get Popular videos
     * @param { Object } parameters Url Objects
     * @param { Function } callback Callback Function
     */
    popular(parameters: object, callback: callback) {
      fetchData(`${root.videos}popular?${urlEncode(parameters)}`, callback);
    },

    /**
     * Get single video detail
     * @param id Video ID
     * @param callback Callback function
     */
    detail(id: string, callback: callback):void {
      fetchData(`${root.videos}videos/${id}`, callback);
    }

  },

  collections: {

    /**
     * Get eatured collections
     * @param { Object } parameters Url Objects
     * @param { Function } callback Callback Function
     */
    featured(parameters: object, callback: callback): void {
      requestUrl = `${root.default}collections/featured?${urlEncode(parameters)}`;
      fetchData(requestUrl, callback);
    },

    /**
     * Get a collection media
     * @param id Collection ID
     * @param parameters Url object
     * @param callback Callback function
     */
    detail(id: string, parameters: object, callback: callback): void {
      requestUrl = `${root.default}/collections/${id}?${urlEncode(parameters)}`
      fetchData(requestUrl, callback);
    }

  },
 

}