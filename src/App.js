import React from 'react';
import './App.css';

import cloudBackgroun from './img/Cloud-background.png'
import SidebarSearchForm from './SidebarSearchForm';
import Sidebar from './Sidebar';
import WeatherNextDays from './WeatherNextDays';
import TodayWeatherHighlights from './TodayWeatherHighlights';




class App extends React.Component {
  
  state = {
    search: "",
    city: "Lille",
    woeid : 608105, //Lille
    locationDay : [],
    weatherInfos : [],
    todayWeatherInfos : [],
    unit : 0 // 0 for celsius, 1 for fahrenheit

  }

  componentWillMount () {
    // API Call
     // fetch(`https://www.metaweather.com/api/location/${this.state.woeid}/}`)
     fetch(`https://www.metaweather.com/api/location/608105/`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          locationDay: data,
          weatherInfos : data.consolidated_weather,
          todayWeatherInfos : data.consolidated_weather[0]
        });
       
    }).catch(function (err) {
      console.log('Something went wrong.', err);
    });
    
  }

  displaySearchbar = () => {
        //e.preventDefault();
        document.getElementById("sidebarSearchForm").style.zIndex ="2";
        console.log("displaySearchbar");
  }
  
  
  handleSubmit = (city, woeid) => {
    document.getElementById("sidebarSearchForm").style.zIndex ="0";
    console.log(city,woeid);
    
    var request = `https://www.metaweather.com/api/location/${woeid}/`;
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
      <div className="sideBar" >
        <div className="cloudBackgroundContainer">
          <img className="cloudImg" src={cloudBackgroun} alt="cloud-background"/>
        </div>
        <Sidebar unit={this.state.unit} todayWeatherInfos={this.state.todayWeatherInfos} city={this.state.city} displaySearch={() => this.displaySearchbar()}/>
        <SidebarSearchForm onSearch={(city,woeid) => this.handleSubmit(city,woeid)} />
      </div>
      <div className="main">
        <div className="header">
          <button className="cButton" onClick={() => this.setState({unit:0})}>°C</button>
          <button className="fButton" onClick={() => this.setState({unit:1})}>°F</button>
        </div>
        <WeatherNextDays unit={this.state.unit} weatherInfos={this.state.weatherInfos}/>
        <TodayWeatherHighlights todayWeatherInfos={this.state.todayWeatherInfos}/>
        <div className="footer">
          <p>Alexis Lagodka © 2020</p>
        </div>
      </div>
      
    </div>
  }
}

export default App;
