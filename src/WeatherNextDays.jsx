import React from 'react';
import WeatherCard from './cards/WeatherCard';

class WeatherNextDays extends React.Component {


    render(){

        const {unit, weatherInfos} = this.props;

        return <div className="weatherNextDays">
            <div className="weatherCardList">
                {weatherInfos.map((weatherDayInfos,index) => (
                    index > 0 ? <WeatherCard unit={unit} weatherDayInfos ={weatherDayInfos}/> :""
                ))}
            </div>
        </div>
    }
}

export default WeatherNextDays 