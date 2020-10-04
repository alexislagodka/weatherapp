import React from 'react';
import WeatherImg from './WeatherImg';
import place from './img/place.svg';

class SideBar extends React.Component {

    handleSearchForPLaces(e) {
        e.preventDefault();
        this.props.displaySearch();
        //document.getElementById("sideBarSearchForm").style.zIndex ="1";
      }

    render(){
        const {todayWeatherInfos, city} = this.props;

         return <div className="sidebar">
            <div className="buttonContainer">    
                <button className="buttonSearchForPlaces" onClick={ e => this.handleSearchForPLaces(e)}>Search for places</button>
            </div>
            <div className="imgContainer"><WeatherImg className="weatherImgSidebar" weatherAbbr={todayWeatherInfos.weather_state_abbr} width="202px" height="234px"/></div>
            <div className="todayTemp"><h1>{parseInt(todayWeatherInfos.the_temp)}°c</h1></div>
            <div className="todayWeatherSateName"><h2>{todayWeatherInfos.weather_state_name}</h2></div>
            <div className="todayDate">Today • {new Date(todayWeatherInfos.applicable_date).toLocaleDateString('fr-FR', {weekday:'short',day:'numeric',month:'long'})}</div>
            <div className="place"><img src={place} alt="place" className="imgplace"/> {city}</div>
        </div>
    }
}

export default SideBar