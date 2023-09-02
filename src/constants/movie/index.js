export const MOVIE_POSTER_BASE_URL = "https://image.tmdb.org/t/p/original";

export const allMoviesOptions = {
  method: "GET",
  url: "/discover/movie",
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
  },
};

export const singleMovieOptions = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie/",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
}
