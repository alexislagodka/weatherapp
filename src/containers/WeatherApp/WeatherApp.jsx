import React, { Component } from 'react';
import styles from './WeatherApp.module.scss';
import RoundButton from '../../components/Buttons/RoundButton/RoundButton';
import SidebarSearchForm from '../SideBarSearchForm/SidebarSearchForm';
import Sidebar from '../../components/Sidebar/Sidebar';
import WeatherNextDays from '../../components/WeatherNextDays/WeatherNextDays';
import TodayWeatherHighlights from '../../components/TodayWeatherHighlights/TodayWeatherHighlights';
import Footer from '../../components/Footer/Footer';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../../components/ErrorScreen/ErrorScreen';

export default class WeatherApp extends Component {

    state = {
        loading: false,
        error: false,
        search: "",
        city: "Lille",
        woeid: 608105, //Lille
        locationDay: [],
        weatherInfos: [],
        todayWeatherInfos: [],
        displaySearchBar: false,
        unit : true // true for celsius, false for fahrenheit
        }
    

    componentDidMount () {
        console.log("Api call");
        this.setState({loading : true});
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/608105/`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            loading: false,
            locationDay: data,
            weatherInfos : data.consolidated_weather,
            todayWeatherInfos : data.consolidated_weather[0]
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
          loading: false,
            error: true
          });
        });
    }

      handleSubmit = (city, woeid) => {
        console.log("submit");
        this.setState({loading: true});
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              loading: false,
              displaySearchbar: false,
              locationDay: data,
              weatherInfos : data.consolidated_weather,
              todayWeatherInfos : data.consolidated_weather[0],
              city,
              woeid
            });
        }).catch(function (err) {
          this.setState({
            loading: false,
            error: true
          })
        });
      }
    
      render() {
        return <div className={styles.weatherAppContainer}>
          {
            this.state.error ?
            <ErrorScreen >
              To resolve the cors problem go to <a href="https://cors-anywhere.herokuapp.com/">cors-anywhere</a>
            </ErrorScreen>
            :
            this.state.loading ?
            <LoadingScreen />
            :
            <div className={styles.weatherApp}>
                {
                  this.state.displaySearchbar ? 
                  <SidebarSearchForm 
                    onSearch={(city,woeid) => this.handleSubmit(city,woeid)} 
                    close={() => this.setState({displaySearchbar: false})}                 
                    />
                  :
                  <Sidebar 
                    unit={this.state.unit} 
                    todayWeatherInfos={this.state.todayWeatherInfos} 
                    city={this.state.city} displaySearch={() => this.setState({displaySearchbar: true})}
                    />
                }
              <div className={styles.weatherDashBoard}>
                <div className={styles.unitChoice}>
                  <RoundButton color='white' handleClick={() => this.setState({unit: true})}>C°</RoundButton>
                  <RoundButton color='blue' handleClick={() => this.setState({unit: false})}>F°</RoundButton> 
                </div>
                <WeatherNextDays 
                  unit={this.state.unit} 
                  weatherInfos={this.state.weatherInfos}
                />   
                <TodayWeatherHighlights todayWeatherInfos={this.state.todayWeatherInfos}/>
                <Footer />
              </div>
          </div>
          }
        </div> 
      }
}
