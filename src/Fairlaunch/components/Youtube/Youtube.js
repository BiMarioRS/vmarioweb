import React from "react";
import "./youtube.css";
import youtube from "../../../assets/img/youtube.svg";

export const FirstChannel = () => {
  return (
    <div className="channel-content">
      <div className="info-yt-content">
        <div className="logo-yt-container">
          <img className="yt-logo" src={youtube}></img>
        </div>
        <div className="text-container">
          <h1>Canal principal</h1>
        </div>
      </div>
    </div>
  );
};

export const SecondChannel = () => {
  return (
    <div className="channel-content">
      <div className="info-yt-content">
        <div className="logo-yt-container">
          <img className="yt-logo" src={youtube}></img>
        </div>
        <div className="text-container">
          <h1>Canal secundario</h1>
        </div>
      </div>
    </div>
  );
};
