import React from 'react'

export default function Image({poster_path}) {
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <img
            src={`${BASE_IMAGE_URL}${poster_path}`}
            width={200}
            height={300}
            alt=""
          />
  )
}
