import React from "react";
import requests from "./request";
import Row from "./Row";

function Movierow() {
  return (
    <div>
      <Row isLarge title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventure} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentary} />
      <Row title="Family" fetchUrl={requests.fetchFamily} />
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
    </div>
  );
}

export default Movierow;
