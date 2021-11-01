import Row from "./Row";
import request from "./request";
import Navigation from "./Navigation";
import NewsVid from "./NewsVid";

function RowMix() {
  return (
    <>
      <Navigation />

      <NewsVid />

      <Row title="Top Headlines" fetchUrl={request.topHeadlines} />
      <Row title="Business" fetchUrl={request.business} />
      <Row title="Entertainment" fetchUrl={request.entertainment} />
      <Row title="Health" fetchUrl={request.health} />
      <Row title="Technology" fetchUrl={request.technology} />
      <Row title="Sports" fetchUrl={request.sports} />
      <Row title="Science" fetchUrl={request.science} />
    </>
  );
}

export default RowMix;
