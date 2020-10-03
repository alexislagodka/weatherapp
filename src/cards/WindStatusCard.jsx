import React from 'react';
import navigation from '../img/navigation.svg';
class WindSatusCard extends React.Component {

    render(){
        const {windSpeed, windDirection, windDirectionCompass} = this.props;
        
        return  <div className="windStatusCard">
        <div className="cardTitle">Wind Status</div>
        <div className = "cardData">{parseInt(windSpeed)} mph</div>
        <div style={{display:"flex", justifyContent:"center"}}>
            <img src={navigation} alt="navigation" style={{transform:`rotate(${windDirection}deg)`}} />
            <div> {windDirectionCompass}</div>
        </div>
      </div>
    }
}

export default WindSatusCard