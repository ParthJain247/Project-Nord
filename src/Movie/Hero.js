import "./Hero.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./request";

const base = "http://image.tmdb.org/t/p/original/";

function Hero() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopular);

      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <>
      <header
        className="hero"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base}${movie?.backdrop_path})`,
          backgroundPosition: "center",
        }}
      >
        <div className="hero-contents">
          <h1>{movie?.title || movie?.original_title}</h1>
          <p>{movie?.overview}</p>
        </div>
      </header>
    </>
  );
}

export default Hero;
