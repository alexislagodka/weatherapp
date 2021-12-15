import React from 'react';
import styles from './HumidityCard.module.scss';

const HumidityCard = (props) => {

  const { humidity } = props;
        
  return  <div className={styles.humidityCard}>
    <div className={styles.cardTitle}>Humidity</div>
    <div className={styles.cardData}>{humidity} %</div>
    <div className={styles.wrapper}>
      <div className={styles.percent}>
        <div>0%</div>
        <div>50%</div>
        <div>100%</div>
      </div>
      <div className={styles.progressBar}>
        <span className={styles.progressBarFill} style={{width:`${humidity}%`}}></span>
      </div>
    </div>
  </div>
}

export default HumidityCard