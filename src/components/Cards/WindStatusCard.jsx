import React from 'react';
import navigation from '../../img/navigation.svg';

const WindSatusCard = (props) => {

    const {windSpeed, windDirection, windDirectionCompass} = props;

    return  <div className="windStatusCard">
    <div className="cardTitle">Wind Status</div>
    <div className="cardData">{parseInt(windSpeed)} mph</div>
    <div className="compassContainer">
        <img src={navigation} alt="navigation" style={{transform:`rotate(${windDirection}deg)`}} />
        <p>{windDirectionCompass}</p>
    </div>
    </div>
}

export default WindSatusCard