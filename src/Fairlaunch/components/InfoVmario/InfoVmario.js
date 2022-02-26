import { func } from "prop-types";
import React from "react";
import "./Info-vmario.css";

function InfoVmario() {
  return (
    <div className="info-vmario-content">
      <div className="container-content-vmario">
        <div className="name-heading">
          <h1>vMario</h1>
          <h1></h1>
        </div>
        <div className="subs-count">
          <h4>Ya somos</h4>
          <div className="subs-number">
            <div className="num-container">
              <h2 className="yt-count">100000</h2>
              <button className="button">get data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoVmario;
