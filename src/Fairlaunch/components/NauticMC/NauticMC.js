import React from "react";
import "./nauticmc.css";
import nauticlogo from "../../../assets/img/NauticMC_logo.png";

function NauticMC() {
  return (
    <div className="nauticmc-content">
      <div className="nautic-back">
        <div className="nautic-logo-container">
          <img className="nautic-logo" src={nauticlogo}></img>
        </div>
      </div>
    </div>
  );
}

export default NauticMC;
