import React from 'react';
import WeatherCard from './cards/WeatherCard';

class WeatherNextDays extends React.Component {


    render(){

        const {weatherInfos} = this.props;

        return <div className="weatherNextDays">
            <div className="weatherCardList">
                {weatherInfos.map((weatherDayInfos,index) => (
                    index > 0 ? <WeatherCard weatherDayInfos ={weatherDayInfos}/> :""
                ))}
            </div>
        </div>
    }
}

export default WeatherNextDays 