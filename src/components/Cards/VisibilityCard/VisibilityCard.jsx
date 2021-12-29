import React from 'react'
import styles from './Visibility.module.scss'

const VisibilityCard = (props) => {
  const { visibility } = props

  return (
    <div className={styles.visibilityCard}>
      <div className={styles.cardTitle}>Visivility</div>
      <div className={styles.cardData}>{parseInt(visibility)} miles</div>
    </div>
  )
}

export default VisibilityCard
