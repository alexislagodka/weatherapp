import React from 'react'
import styles from './AirPressureCard.module.scss'

const AirPressureCard = (props) => {
  const { airPressure } = props

  return (
    <div className={styles.airPressureCard}>
      <div className={styles.cardTitle}>Air pressure</div>
      <div className={styles.cardData}>{airPressure} mb</div>
    </div>
  )
}

export default AirPressureCard
