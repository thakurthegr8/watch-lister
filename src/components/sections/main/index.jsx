import React from "react";
import Image from "../../utils/image";
import styles from "./Main.module.css";
import Link from "next/link";

export default function Main({ data }) {
  const movies = data;
  console.log(movies);
  const BASE_MOVIE_URL = "https://api.themoviedb.org/3/movie/";

  return (
    <div className={`${styles.container}`}>
      {movies.map((item) => (
        <Link key={item.id} href={`/movie/${item.id}`}>
          <Image poster_path={item.poster_path} />
          <div>
            <button>{item.title}</button>
            <p>{item.vote_average}</p>
          </div>
          <p>{item.release_date}</p>
        </Link>
      ))}
    </div>
  );
}
