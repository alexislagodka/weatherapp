import React from 'react';
import WeatherCard from '../Cards/WeatherCard';

const WeatherNextDays = (props) => {

    const {unit, weatherInfos} = props;

    return <div className="weatherNextDays">
        <div className="weatherCardList">
            {weatherInfos.map((weatherDayInfos,index) => (
                index > 0 ? <WeatherCard unit={unit} weatherDayInfos ={weatherDayInfos}/> :""
            ))}
        </div>
    </div>
}

export default WeatherNextDays 