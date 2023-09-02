import { MOVIE_API_ACCESS_TOKEN } from "@/src/constants";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${MOVIE_API_ACCESS_TOKEN}`,
};

const movieInstance = (options) => {
  return axios({
    baseURL: BASE_URL,
    ...options,
    headers,
  });
};

export default movieInstance;
