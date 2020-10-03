import React from 'react';

class HumidityCard extends React.Component {

    render(){
        const {humidity} = this.props;
        
        return  <div className="humidityCard">
        <div className="cardTitle">Humidity test</div>
        <div className="cardData">{humidity} %</div>
        <div></div>
      </div>
    }
}

export default HumidityCard