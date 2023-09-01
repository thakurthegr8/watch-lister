import React from "react";

export default function Main(data) {
  const movies = data.data;
  console.log(movies);
  return (
    <div className="grid-cols-3 gap-px">
      {movies.map((item) => (
        <div key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            width={200}
            height={300}
            alt=""
          />
          <div className="flex items-center">
            <h3>{item.title}</h3>
            <p>{item.vote_average}</p>
          </div>
          <p>{item.release_date}</p>
        </div>
      ))}
    </div>
  );
}
