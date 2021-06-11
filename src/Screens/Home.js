import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Rows from "../Components/Rows";
import request_api from "../Requesting API/Request";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Rows
        title="Netflix Movies"
        fetchUrl={request_api.fetchNetflixOriginals}
        isLargeRow
          />

      <Rows title="Trending Now" fetchUrl={request_api.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request_api.fetchNetflixOriginals} />
      <Rows title="Horror Movie" fetchUrl={request_api.fetchHorrorMovies} />
      <Rows title="Romance Movie" fetchUrl={request_api.fetchRomanceMovies} />
      <Rows title="Comedy Movie" fetchUrl={request_api.fetchComedyMovies} />
    </div>
  );
}

export default Home;
