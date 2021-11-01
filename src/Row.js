import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
function Row({ title, fetchUrl }) {
  const [newsTitle, setNewsTitle] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setNewsTitle(request.data.articles);
      return request;
    }

    const boxes = document.querySelectorAll(".row-box");
    window.addEventListener("scroll", checkBoxes);
    checkBoxes();
    function checkBoxes() {
      const trigger = (window.innerHeight / 5) * 4;
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < trigger) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }

    fetchData();
  }, [fetchUrl]);
  console.table(newsTitle);
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="row-body">
      <h2 style={{ color: "white" }} className="heading" id={title}>
        {title}
      </h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {newsTitle.map((mov) => (
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src={
                  mov.urlToImage
                    ? mov.urlToImage
                    : "https://www.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg "
                }
                alt={mov.source.name}
              />
              <div className="card-body">
                <h5 className="card-title">{mov.title}</h5>
                <p className="card-text">
                  {" "}
                  {mov.content
                    ? truncateString(mov.content, 500)
                    : "Tap to know more"}
                </p>
                <a href={mov.url ? mov.url : ""} className="btn btn-primary">
                  Know more!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;

/*<img
              className="row-images"
              src={mov.urlToImage}
              alt={mov.source.name}
              truncateString(mov.content, 500)
            />
             */
