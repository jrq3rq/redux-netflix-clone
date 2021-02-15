import React from "react";
import "./Banner.css";

const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">movie name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `test description here! test description here!test description here!test description here!test description here!test description here!test description here!test description here!test description here!test description here!test description here!test description here!test description here!test description here!test description here!test description here!`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
};

export default Banner;

// Truncation
