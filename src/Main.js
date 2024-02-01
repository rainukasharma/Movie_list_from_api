import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: "1b9e570f9b564983d24b64cf91c05b41",
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching movie data:", err);
      });
  }, []);

  const movieList = movies.map(({ title, poster_path, id }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
      <section key={id} className="card">
        <img src={posterUrl} alt={title} />
        <section className="content">
          <p>{title}</p>
          <p>Movie ID: {id}</p>
        </section>
      </section>
    );
  });

  return <div className="movies-container">{movieList}</div>;
}

export default Main;
