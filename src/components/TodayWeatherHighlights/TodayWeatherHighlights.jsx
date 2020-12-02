import React from 'react';
import WindStatusCard from '../Cards/WindStatusCard';
import HumidityCard from '../Cards/HumidityCard';
import AirPressureCard from '../Cards/AirPressureCard';
import VisibilityCard from '../Cards/VisibilityCard';

const TodaytWeatherHighlights = (props) => {

    const {todayWeatherInfos} = props;

    return <div className="todaytWeatherHighlights">
        <h3>Today's Highlights</h3>
        <div className="todaysCards">  
            <WindStatusCard 
                windSpeed={todayWeatherInfos.wind_speed} 
                windDirection={todayWeatherInfos.wind_direction} 
                windDirectionCompass={todayWeatherInfos.wind_direction_compass}
            />
            <HumidityCard humidity={todayWeatherInfos.humidity}/> 
            <AirPressureCard airPressure={todayWeatherInfos.air_pressure}/>
            <VisibilityCard visibility={todayWeatherInfos.visibility}/>
        </div>
    </div>
}

export default TodaytWeatherHighlights