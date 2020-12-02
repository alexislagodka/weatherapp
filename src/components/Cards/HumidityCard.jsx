import React from 'react';

const HumidityCard = (props) => {

  const { humidity } = props;
        
  return  <div className="humidityCard">
    <div className="cardTitle">Humidity</div>
    <div className="cardData">{humidity} %</div>
    <div className="wrapper">
      <div className="percent">
        <p>0%</p>
        <p>50%</p>
        <p>100%</p>
      </div>
      <div className="progressBar">
        <span className="progress-bar-fill" style={{width:`${humidity}%`}}></span>
      </div>
    </div>
  </div>
}

export default HumidityCard