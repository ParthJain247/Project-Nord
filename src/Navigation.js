import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
          Home
        </a>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#Top Headlines">
                Headline
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Business">
                Business
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Entertainment">
                Entertainment
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Health">
                Health
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Technology">
                Technology
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Sports">
                Sports
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Science">
                Science
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
