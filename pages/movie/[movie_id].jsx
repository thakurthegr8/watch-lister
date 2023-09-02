import React from "react";
import axios from "axios";
import movieInstance from "@/src/services/movie";
import {
  MOVIE_POSTER_BASE_URL,
  singleMovieOptions,
} from "@/src/constants/movie";
import Navbar from "@/src/components/sections/navbar";
import Image from "next/image";
import { imageLoader } from "@/src/utils/image";

export const getServerSideProps = async (context) => {
  const id = context.query.movie_id;

  singleMovieOptions.url = `/movie/${id}`;
  try {
    const res = await movieInstance(singleMovieOptions);
    const result = await res.data;
    return {
      props: {
        movie: result,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default function Movie(props) {
  const { movie } = props;
  console.log(movie);
  return (
    <>
      <Navbar />

      <div className="flex flex-col container mx-auto max-w-4xl p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Image
              className="rounded flex-1 w-1/2 sm:w-1/3 md:w-full"
              loader={imageLoader}
              src={`${MOVIE_POSTER_BASE_URL}/${movie.poster_path}`}
              width={200}
              height={300}
              loading="lazy"
              style={{ objectFit: "cover" }}
              alt={movie.title}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2 justify-center">
            <p className="text-3xl font-bold">{movie.title}</p>
            <div className="text-sm text-white/50 gap-2 flex items-center">
              <span className="bg-red-600 rounded p-0.5 text-white">
                Rating {movie.vote_average}
              </span>
              <span>&#8226;</span>
              <span className="bg-dark_secondary rounded text-white p-0.5">
                {movie.original_language}
              </span>
            </div>
            <p className="text-sm sm:text-base text-white/80">
              {movie.overview}
            </p>
            <div className="flex items-start gap-2">
              {movie?.genres.map((item) => (
                <p
                  key={item.id}
                  className=" rounded-full bg-dark_secondary/50 border border-dark_secondary p-1 text-sm"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
