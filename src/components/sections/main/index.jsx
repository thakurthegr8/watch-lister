import React from "react";
import Image from "next/image";
import styles from "./Main.module.css";
import Link from "next/link";
import { MOVIE_POSTER_BASE_URL } from "@/src/constants/movie";
import { imageLoader } from "@/src/utils/image";

export default function Main({ data }) {
  const movies = data;
  return (
    <div className={styles.container}>
      {movies.map((item) => (
        <Link
          key={item.id}
          href={`/movie/${item.id}`}
          className="relative overflow-hidden hover:opacity-90 transition-all"
        >
          <Image
            className="rounded w-full"
            loader={imageLoader}
            src={`${MOVIE_POSTER_BASE_URL}/${item.poster_path}`}
            width={200}
            height={300}
            loading="lazy"
            style={{ objectFit: "cover" }}
            alt={`${item.title} image`}
          />
          <div className="text-sm flex flex-col text-white gap-2 pt-2">
            <p className="font-medium">{item.title}</p>
          </div>
          <p className="font-bold absolute top-0 text-white bg-black rounded p-2">
            {item.vote_average}
          </p>
        </Link>
      ))}
    </div>
  );
}
