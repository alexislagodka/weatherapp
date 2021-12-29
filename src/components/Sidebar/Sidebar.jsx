import React from 'react'
import styles from './Sidebar.module.scss'
import WeatherImg from '../WeatherImg/WeatherImg'
import place from '../../assets/images/place.svg'
import RoundButton from '../Buttons/RoundButton/RoundButton'

const SideBar = (props) => {
  const handleSearchForPLaces = (e) => {
    e.preventDefault()
    props.displaySearch()
  }

  const { unit, todayWeatherInfos, city, getLocation } = props

  return (
    <div className={styles.sidebar}>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonSearchForPlaces} onClick={(e) => handleSearchForPLaces(e)}>Search for places</button>
        <RoundButton handleClick={getLocation}>
          <span className='material-icons'>
            my_location
          </span>
        </RoundButton>
      </div>
      <div className={styles.imgContainer}>
        <WeatherImg className={styles.weatherImgSidebar} weatherAbbr={todayWeatherInfos.weather_state_abbr} />
      </div>
      <div className={styles.todayTemp}>
        {
            unit
              ? <h1>{parseInt(todayWeatherInfos.the_temp)}°c</h1>
              : <h1>{parseInt(((todayWeatherInfos.the_temp) * (9 / 5)) + 32)}°f</h1>
        }
      </div>
      <div className={styles.todayWeatherSateName}><h2>{todayWeatherInfos.weather_state_name}</h2></div>
      <div className={styles.todayDate}>Today • {new Date(todayWeatherInfos.applicable_date).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' })}</div>
      <div className={styles.place}><img src={place} alt='place' className='imgplace' /> {city}</div>
    </div>
  )
}

export default SideBar
