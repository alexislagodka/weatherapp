import React from 'react';

class VisibilityCard extends React.Component {

    render(){
        const {visibility} = this.props;
        
        return  <div className="visibilityCard">
        <div className="cardTitle">Visivility</div>
        <div className="cardData">{parseInt(visibility)} miles</div>
      </div>
    }
}

export default VisibilityCard