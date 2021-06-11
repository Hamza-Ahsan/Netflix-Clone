import axios from "../Requesting API/axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import request_api from "../Requesting API/Request";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(request_api.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movies);

  function truncate(string, numb) {
    return string.length > numb ? string.substr(0, numb - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage:
          `url('https://image.tmdb.org/t/p/original/${movies.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__info">
        <h1>{movies.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(`${movies.overview}`, 140)}
        </div>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  );
}

export default Banner;
