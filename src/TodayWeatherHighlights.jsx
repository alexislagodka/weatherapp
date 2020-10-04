import React from 'react';
import WindStatusCard from './cards/WindStatusCard';
import HumidityCard from './cards/HumidityCard';
import AirPressureCard from './cards/AirPressureCard';
import VisibilityCard from './cards/VisibilityCard';

class TodaytWeatherHighlights extends React.Component {

    

    render(){

        const {todayWeatherInfos} = this.props;

        return <div className="todaytWeatherHighlights">
        <h3>Today's Highlights</h3>
        <div className="todaysCards">  
            <WindStatusCard windSpeed={todayWeatherInfos.wind_speed} windDirection={todayWeatherInfos.wind_direction} windDirectionCompass={todayWeatherInfos.wind_direction_compass}/>
            <HumidityCard humidity={todayWeatherInfos.humidity}/> 
            <AirPressureCard airPressure={todayWeatherInfos.air_pressure}/>
            <VisibilityCard visibility={todayWeatherInfos.visibility}/>
        </div>
      </div>
    }
}

export default TodaytWeatherHighlights