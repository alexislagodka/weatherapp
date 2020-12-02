import React from 'react';
import './App.css';
import cloudBackgroun from './img/Cloud-background.png'
import SidebarSearchForm from '././components/SideBarSearchForm/SidebarSearchForm';
import Sidebar from './components/SideBar/Sidebar';
import WeatherNextDays from './components/WeatherNextDays/WeatherNextDays';
import TodayWeatherHighlights from './components/TodayWeatherHighlights/TodayWeatherHighlights';

class App extends React.Component {
  
  state = {
    search: "",
    city: "Lille",
    woeid : 608105, //Lille
    locationDay : [],
    weatherInfos : [],
    todayWeatherInfos : [],
    unit : true // true for celsius, false for fahrenheit
  }

  componentDidMount () {
    // API Call
    console.log("Api call");
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/608105/`)
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
    var request = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`;
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
      {this.state.weatherInfos.length === 0 ? <div style={{position:"absolute",width:"100%",height:"100%",zIndex:"4",backgroundColor:"black"}}><h1>Initialization ...</h1></div> :""}
      <div className="sideBar" >
        <div className="cloudBackgroundContainer">
          <img className="cloudImg" src={cloudBackgroun} alt="cloud-background"/>
        </div>
        <Sidebar unit={this.state.unit} todayWeatherInfos={this.state.todayWeatherInfos} city={this.state.city} displaySearch={() => this.displaySearchbar()}/>
        <SidebarSearchForm onSearch={(city,woeid) => this.handleSubmit(city,woeid)} />
      </div>
      <div className="main">
        <div className="header">
          <button className="cButton" onClick={() => this.setState({unit: true})}>°C</button>
          <button className="fButton" onClick={() => this.setState({unit: false})}>°F</button>
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
