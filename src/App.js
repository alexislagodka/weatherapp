import React from 'react';
import './App.css';
import place from './img/place.svg';

import SideBarSearchForm from './SideBarSearchForm';
import WeatherImg from './WeatherImg';
import WeatherCard from './cards/WeatherCard';

import WindStatusCard from './cards/WindStatusCard';
import HumidityCard from './cards/HumidityCard';
import AirPressureCard from './cards/AirPressureCard';
import VisibilityCard from './cards/VisibilityCard';


class App extends React.Component {
  
  state = {
    search: "",
    city: "Lille",
    woeid : 608105, //Lille
    locationDay : [],
    weatherInfos : [],
    todayWeatherInfos : []

  }

  componentWillMount () {
    // API Call
      fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/608105/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          locationDay: data,
          weatherInfos : data.consolidated_weather,
          todayWeatherInfos : data.consolidated_weather[0]
        });
       
    }).catch(function (err) {
      console.warn('Something went wrong.', err);
    });
    
  }

  handleSearchForPLaces(e){
    e.preventDefault();
    document.getElementById("sideBarSearchForm").style.zIndex ="1";
  }
  
  handleSubmit = (city, woeid) => {
    document.getElementById("sideBarSearchForm").style.zIndex ="0";
    console.log(city,woeid);
    
    var request = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/` ;
    console.log(request);
    fetch(request)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          locationDay: data,
          weatherInfos : data.consolidated_weather,
          todayWeatherInfos : data.consolidated_weather[0],
          city,
          woeid
        });
    }).catch(function (err) {
      console.warn('Something went wrong.', err);
    });
    
    
  }

  render() {
    return <div id="app">
      <SideBarSearchForm onSearch={this.handleSubmit}/>
      <div className="sidebar">
      <div className="blank"></div>
        <button style={{
          position: "absolute",
          fontFamily: "Raleway",
          fontSize: "16px",
          color:"#E7E7EB",
          width: "161px",
          height: "40px",
          left: "46px",
          top: "42px",
          background: "#6E707A"
        }}onClick={ e => this.handleSearchForPLaces(e)}>Search for places</button>
        
        <div className="weatherImgBig"><WeatherImg weatherAbbr={this.state.todayWeatherInfos.weather_state_abbr} width="202px" height="234px"/></div>
        <div className="todayTemp">{parseInt(this.state.todayWeatherInfos.the_temp)}°c</div>
        <div className="todayWeatherSateName">{this.state.todayWeatherInfos.weather_state_name}</div>
        <div className="todayDate">Today • {new Date(this.state.todayWeatherInfos.applicable_date).toLocaleDateString('fr-FR', {weekday:'short',day:'numeric',month:'long'})}</div>
        <div className="place"><img src={place} alt="place" className="imgplace"/> {this.state.city}</div>
      </div>
      
      <div className="main">
        <div className="weatherCardPart">
          <div className="weatherCardList">
          {this.state.weatherInfos.map((weatherDayInfos,index) => (
            
            index > 0 ? <WeatherCard weatherDayInfos ={weatherDayInfos}/> :""

          ))}
          </div>
        </div>
        <div className="highlightsPart">
          <div className="highlights">Today's Highlights</div>
          <div className="todaysCards">  
            
              <WindStatusCard windSpeed={this.state.todayWeatherInfos.wind_speed} windDirection={this.state.todayWeatherInfos.wind_direction} windDirectionCompass={this.state.todayWeatherInfos.wind_direction_compass}/>
              <HumidityCard humidity={this.state.todayWeatherInfos.humidity}/> 
            
              <AirPressureCard airPressure={this.state.todayWeatherInfos.air_pressure}/>
              <VisibilityCard visibility={this.state.todayWeatherInfos.visibility}/>
            
          </div>
        </div>
         
      </div>
    </div>
  }
}

export default App;
