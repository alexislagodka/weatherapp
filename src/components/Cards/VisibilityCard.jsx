import React from 'react';

const VisibilityCard = (props) => {

  const {visibility} = props;
  
  return  <div className="visibilityCard">
    <div className="cardTitle">Visivility</div>
    <div className="cardData">{parseInt(visibility)} miles</div>
  </div>
}


export default VisibilityCard