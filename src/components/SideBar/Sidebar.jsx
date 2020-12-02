import React from 'react';
import WeatherImg from '../WeatherImg/WeatherImg';
import place from '../../img/place.svg';

const SideBar = (props) => {

    const handleSearchForPLaces = (e) => {
        e.preventDefault();
        props.displaySearch();
      }

    const {unit, todayWeatherInfos, city} = props;

    return <div className="sidebar">
        <div className="buttonContainer">    
            <button className="buttonSearchForPlaces" onClick={(e) => handleSearchForPLaces(e)}>Search for places</button>
        </div>
        <div className="imgContainer">
            <WeatherImg className="weatherImgSidebar" weatherAbbr={todayWeatherInfos.weather_state_abbr} width="202px" height="234px"/>
        </div>
        <div className="todayTemp">
        {
            unit ? <h1>{parseInt(todayWeatherInfos.the_temp)}°c</h1> 
            :
            <h1>{parseInt(((todayWeatherInfos.the_temp)*(9/5))+32)}°f</h1>
        }    
        </div>
        <div className="todayWeatherSateName"><h2>{todayWeatherInfos.weather_state_name}</h2></div>
        <div className="todayDate">Today • {new Date(todayWeatherInfos.applicable_date).toLocaleDateString('fr-FR', {weekday:'short',day:'numeric',month:'long'})}</div>
        <div className="place"><img src={place} alt="place" className="imgplace"/> {city}</div>
    </div>
}

export default SideBar