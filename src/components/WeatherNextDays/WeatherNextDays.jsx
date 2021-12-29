import React from 'react'
import styles from './WeatherNextDays.module.scss'
import WeatherCard from '../Cards/WeatherCard/WeatherCard'

const WeatherNextDays = (props) => {
  const { unit, weatherInfos } = props

  return (
    <div className={styles.weatherNextDays}>
      <div className={styles.weatherCardList}>
        {weatherInfos.map((weatherDayInfos, index) => (
          index > 0 ? <WeatherCard unit={unit} weatherDayInfos={weatherDayInfos} key={index} /> : ''
        ))}
      </div>
    </div>
  )
}

export default WeatherNextDays
