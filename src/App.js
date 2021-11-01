import Container from "./Container";
import RowMix from "./RowMix";
import Game from "./Game/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./Movie/Movie";
import WeatherMix from "./Weather/src/WeatherMix";
import Crypto from "./Crypto/src/Crypto";
import Calender from "./Calender/src/Calender";
import Scribble from "./Scribble/Scribble";
function App() {
  return (
    <>
      <Router>
        <Container />

        <Switch>
          {/* Home Tile */}
          <Route path="/" exact component={Calender} />
          {/* <Route path="/" exact component={Container} />*/}
          {/* All News Rows */}
          <Route path="/news" exact component={RowMix} />
          {/* This Route loads game */}
          <Route path="/game" exact component={Game} />
          {/* This Route loads movie */}
          <Route path="/movie" exact component={Movie} />
          {/* This Route loads weather */}
          <Route path="/weather" exact component={WeatherMix} />
          {/* This Route loads Crypto */}
          <Route path="/crypto" exact component={Crypto} />
          {/* This Route loads Scribble */}
          <Route path="/scribble" exact component={Scribble} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
