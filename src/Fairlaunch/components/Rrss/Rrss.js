import React from "react";
import "./rrss.css";

import iglogo from "../../../assets/img/instagram.svg";
import tiktoklogo from "../../../assets/img/tiktok.svg";
import twitterlogo from "../../../assets/img/twitter.svg";

export const Instagram = () => {
  return (
    <div className="rrss-content">
      <div className="rrss-ig">
        <div className="text-content-rrss">
          <h1 className="rrss-user">@vmario</h1>
          <h1 className="rrss">Instagram</h1>
        </div>
        <div className="rrss-logo-container">
          <img className="rss-logo" src={iglogo}></img>
        </div>
      </div>
    </div>
  );
};
export const Twitch = () => {
  return (
    <div className="rrss-content">
      <div className="rrss-twitch">
        <div className="text-content-rrss">
          <h1 className="rrss-user">@vmario</h1>
          <h1 className="rrss">Twitch</h1>
        </div>
        <div className="rrss-logo-container">
          <img className="rss-logo" src={iglogo}></img>
        </div>
      </div>
    </div>
  );
};
export const Twitter = () => {
  return (
    <div className="rrss-content">
      <div className="rrss-twitter">
        <div className="text-content-rrss">
          <h1 className="rrss-user">@vmario</h1>
          <h1 className="rrss">Twitter</h1>
        </div>
        <div className="rrss-logo-container">
          <img className="rss-logo" src={twitterlogo}></img>
        </div>
      </div>
    </div>
  );
};
export const Tiktok = () => {
  return (
    <div className="rrss-content">
      <div className="rrss-tiktok">
        <div className="text-content-rrss">
          <h1 className="rrss-user">@vmario</h1>
          <h1 className="rrss">Tiktok</h1>
        </div>
        <div className="rrss-logo-container">
          <img className="rss-logo" src={tiktoklogo}></img>
        </div>
      </div>
    </div>
  );
};
