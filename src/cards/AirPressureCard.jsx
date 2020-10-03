import React from 'react';

class AirPressureCard extends React.Component {

    render(){
        const {airPressure} = this.props;
        
        return  <div className="airPressureCard">
        <div className="cardTitle">Air pressure</div>
        <div className="cardData">{airPressure} mb</div>
        <div></div>
      </div>
    }
}

export default AirPressureCard