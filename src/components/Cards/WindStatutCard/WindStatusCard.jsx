import React from 'react'
import styles from './WindStatusCard.module.scss'
import navigation from '../../../assets/images/navigation.svg'

const WindSatusCard = (props) => {
  const { windSpeed, windDirection, windDirectionCompass } = props

  return (
    <div className={styles.windStatusCard}>
      <div className={styles.cardTitle}>Wind Status</div>
      <div className={styles.cardData}>{parseInt(windSpeed)} mph</div>
      <div className={styles.compassContainer}>
        <img src={navigation} alt='navigation' style={{ transform: `rotate(${windDirection}deg)` }} />
        <p>{windDirectionCompass}</p>
      </div>
    </div>
  )
}

export default WindSatusCard
