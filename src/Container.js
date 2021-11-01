import React, { useEffect } from "react";
import Clock from "./Clock/Clock";
import "./Container.css";
import { Link } from "react-router-dom";
import logo from "./Movie/Nordt.png";
import todo from "./todo.png";

import brain from "./brain.png";

function Container() {
  useEffect(() => {
    /*                FOR BLUR                         */
    const loadText = document.querySelector(".loading-text");
    const bg = document.querySelector(".container-body");
    let load = 0;
    let int = setInterval(blur, 20);
    function blur() {
      load++;
      if (load > 99) {
        clearInterval(int);
      }
      loadText.innerHTML = `${load}%`;
      loadText.style.opacity = scale(load, 0, 100, 1, 0);
      bg.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`;
    }
    /*                Function to MAP a value to another                      */
    function scale(number, inMin, inMax, outMin, outMax) {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    /*                FOR BLUR                         */
    /*                FOR SOUND                         */
    // const sound = document.querySelectorAll(".pannel");

    // for (var i = 0; i < sound.length; i++) {
    //   sound[i].addEventListener("click", function () {
    //     audio.play();
    //   });
    // }

    /*                FOR SOUND                         */
    /*                FOR PANEL STRECTH                         */
    const panels = document.querySelectorAll(".pannel");
    function removeActive() {
      panels.forEach((mov) => mov.classList.remove("active"));
    }
    panels.forEach((mov) =>
      mov.addEventListener("click", () => {
        removeActive();
        mov.classList.add("active");
      })
    );
  }, []);
  // https://guess-game-9adaf.web.app/ Guess App
  return (
    <>
      <div className="loading-text">0%</div>

      <div className="container-body">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <a href="http://localhost:1234/">
          <img className="to-do" src={todo} alt="logo" />
        </a>
        <Clock />
        <a href="https://guess-game-9adaf.web.app/">
          <img className="brain" src={brain} alt="logo" />
        </a>
        <div className="container">
          <div
            className="pannel "
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2020/03/20/05/31/coffee-4949530_960_720.jpg')",
            }}
          >
            <Link to="/news">
              <h3>News</h3>
            </Link>
          </div>

          <div
            className="pannel "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516912926362-1da264f6c398?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyayUyMGNhbWVyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')",
            }}
          >
            <Link to="/movie">
              <h3>Movies</h3>
            </Link>
          </div>
          <div
            className="pannel "
            style={{
              backgroundImage:
                "url('https://wallpaperaccess.com/full/2526240.jpg')",
            }}
          >
            <Link to="/game">
              <h3>Game</h3>
            </Link>
          </div>

          <div
            className="pannel "
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/bitcoin-halving-cryptocurrency-silver-background-macro-photo_217333-243.jpg?size=626&ext=jpg')",
            }}
          >
            <Link to="/crypto">
              <h3>Crypto</h3>
            </Link>
          </div>

          <div
            className="pannel "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542127306-0c218c711733?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')",
            }}
          >
            <Link to="/weather">
              <h3>Weather</h3>
            </Link>
          </div>
          <div
            className="pannel "
            style={{
              backgroundImage:
                "url('https://wallpapercave.com/wp/wp3172900.jpg')",
            }}
          >
            <h3>
              <a href="https://map-app-27862.web.app/">Map</a>
            </h3>
          </div>
          <div
            className="pannel "
            style={{
              backgroundImage:
                "url('http://4.bp.blogspot.com/_NT2qYHHyMZA/TQMZHHaHJpI/AAAAAAAAB6o/tDg0vSOoBuw/s16000/byroglyphicsff.jpg')",
            }}
          >
            <Link to="/scribble">
              <h3>Draw</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
/*
const panels = document.querySelectorAll(".pannel");
panels.forEach((mov) =>
  mov.addEventListener("click", () => mov.classList.add("active"))
);
*/

export default Container;
