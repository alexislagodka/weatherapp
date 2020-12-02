import React from 'react';
import WeatherImg from '../WeatherImg/WeatherImg';

const WeatherCard = (props) => {

    const {unit, weatherDayInfos} = props;

    return <div className="weatherCard">
        <div className="cardTitle">{new Date(weatherDayInfos.applicable_date).toLocaleDateString('fr-FR', {weekday:'short',day:'numeric',month:'long'})}</div>
        <div><WeatherImg weatherAbbr={weatherDayInfos.weather_state_abbr} width="62px" height="56px"/></div>
        <div className ="tempInterval" style={{display:"flex", flexDirection:"row", justifyContent:"space-around" }}>
            {
                unit ?
                <div style={{color:"#E7E7EB"}}>{parseInt(weatherDayInfos.min_temp)}°C</div>
                : 
                <div style={{color:"#E7E7EB"}}>{parseInt(((weatherDayInfos.min_temp)*(9/5))+32)}°F</div>
            }
            
            {
                unit ?
                <div style={{color:"#A09FB1"}}>{parseInt(weatherDayInfos.max_temp)}°C</div>
                : 
                <div style={{color:"#A09FB1"}}>{parseInt(((weatherDayInfos.max_temp)*(9/5))+32)}°F</div>
            }
        </div>
    </div>
}

export default WeatherCard