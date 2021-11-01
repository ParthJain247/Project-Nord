import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./request";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base = "http://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return requests;
    }
    fetchData();
  }, [props.fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  console.log(movies);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <div className="row">
        <h1 id={props.title}>{props.title}</h1>
        <div className="row-posters">
          {movies.map((mov) => (
            <img
              key={mov.id}
              onClick={() => handleClick(mov)}
              className={`row_poster  ${props.isLarge && "row_posterLarge"}`}
              src={`${base}${mov.poster_path}`}
              alt={mov.title}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
