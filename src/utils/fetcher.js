import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
  },
});

export const upload = axios.create({
  method: "POST",
  url: `${process.env.REACT_APP_MYTRANSFER_URL}/upload`,
});

export default fetcher;
