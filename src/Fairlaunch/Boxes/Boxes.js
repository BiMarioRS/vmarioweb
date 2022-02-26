import React, { useEffect } from "react";
import "./boxes.css";
import Vmario from "../components/Vmario/Vmario";
import InfoVmario from "../components/InfoVmario/InfoVmario.js";

import { Instagram, Twitter, Tiktok, Twitch } from "../components/Rrss/Rrss.js";

import { FirstChannel, SecondChannel } from "../components/Youtube/Youtube.js";

import NauticMC from "../components/NauticMC/NauticMC.js";

function Boxes() {
  return (
    <div className="grid-container">
      <div className="info-content">
        <div className="vmario-container">
          <Vmario />
        </div>
        <div className="info-vmario-container">
          <InfoVmario />
        </div>
        <div className="first-channel-container">
          <FirstChannel />
        </div>
        <div className="second-channel-container">
          <SecondChannel />
        </div>
        <div className="instagram-container">
          <Instagram />
        </div>
        <div className="twitch-container">
          <Twitch />
        </div>
        <div className="twitter-container">
          <Twitter />
        </div>
        <div className="nauticmc-container">
          <NauticMC />
        </div>
        <div className="tiktok-container">
          <Tiktok />
        </div>
      </div>
    </div>
  );
}

export default Boxes;
