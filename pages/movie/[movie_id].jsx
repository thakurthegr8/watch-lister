import React from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie/",
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjI5ZTU0NWYzZDJlMmY5YjgxYWFiZjBlYzViOTI4NCIsInN1YiI6IjY0ZWNiZmNjODM5MDE4MDEzY2RiYjU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q3lJvm-rMMqW6_nKQeWDr_QAW2bYY3PfFAFlFXa0UcQ",
  },
};


export const getServerSideProps = async (context) => {
  console.log(context.query);
  const id = context.query.id;
  try {
    const res = await axios('https://api.themoviedb.org/3/discover/movie/' + id ,options);
    const results = res.data.results;
    return {
      props: {
        movie : results,
      },
    };
  } catch (error) {
    // console.log(error);
    return {
      notFound: true,
    };
  }
};



export default function Movie(movie) {
  // console.log(movie);
  return <div>Movie detail page
    {/* <h1>{movie.title}</h1> */}
  </div>;
}
