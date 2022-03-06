import { func } from "prop-types";
import React, { Component } from "react";
import "./Info-vmario.css";


class InfoVmario extends Component {
  state =  {
    renderedResponse: ''
  }

  getResponse = async() => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  componentDidMount() {
    this.getResponse()
    .then(res =>{
      const someData = res;
      this.setState({renderedResponse: someData})
    })
  }


  render(){ 

    const { renderedResponse } = this.state;

    return( <div className="info-vmario-content">
    <div className="container-content-vmario">
      <div className="name-heading">
        <h1>vMario</h1>
        <h1></h1>
      </div>
      <div className="subs-count">
        <h4>Ya somos</h4>
        <div className="subs-number">
          <div className="num-container">
            <h2 className="yt-count">{renderedResponse.express}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
}

export default InfoVmario;
