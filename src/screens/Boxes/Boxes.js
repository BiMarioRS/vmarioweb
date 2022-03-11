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
          <a
            href="https://www.youtube.com/channel/UC106ODNmI-M5BDMx5_2yNMQ"
            target="_blank"
          >
            <FirstChannel />
          </a>
        </div>
        <div className="second-channel-container">
          <a
            href="https://www.youtube.com/channel/UCvoOSJdsTp6tmthYm1s_c_w"
            target="_blank"
          >
            <SecondChannel />
          </a>
        </div>
        <div className="instagram-container">
          <a href="https://www.instagram.com/vmariors/" target="_blank">
            <Instagram />
          </a>
        </div>
        <div className="twitch-container">
          <a href="https://www.twitch.tv/vmariors" target="_blank">
            <Twitch />
          </a>
        </div>
        <div className="twitter-container">
          <a href="https://twitter.com/vmariors/" target="_blank">
            <Twitter />
          </a>
        </div>
        <div className="nauticmc-container">
          <a href="https://web.nauticmc.net/" target="_blank">
            <NauticMC />
          </a>
        </div>
        <div className="tiktok-container">
          <a href="https://www.tiktok.com/@vmariors" target="_blank">
            <Tiktok />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
