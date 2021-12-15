import React from 'react';
import styles from './TodayWeatherHighlights.module.scss';
import WindStatusCard from '../Cards/WindStatutCard/WindStatusCard';
import HumidityCard from '../Cards/HumidityCard/HumidityCard';
import AirPressureCard from '../Cards/AirPressureCard/AirPressureCard';
import VisibilityCard from '../Cards/VisibilityCard/VisibilityCard';

const TodaytWeatherHighlights = (props) => {

    const {todayWeatherInfos} = props;

    return <div className={styles.todaytWeatherHighlightsContainer}>
        <div className={styles.todaytWeatherHighlights}>
            <div className={styles.highlightsTitle}>Today's Highlights</div>
            <div className={styles.todaysCards}>  
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
    </div>
}

export default TodaytWeatherHighlights