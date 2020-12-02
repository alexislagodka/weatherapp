import React from 'react';

const AirPressureCard = (props) => {
  const {airPressure} = props;
        
  return <div className="airPressureCard">
    <div className="cardTitle">Air pressure</div>
    <div className="cardData">{airPressure} mb</div>
  </div>
}

export default AirPressureCard