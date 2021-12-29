import React from 'react'
import styles from './RoundButton.module.scss'

export default function RoundButton (props) {
  let clsName = props.color

  switch (props.color) {
    case 'white': clsName = styles.white
      break
    case 'blue': clsName = styles.blue
      break
    default: clsName = styles.default
  }

  return (
    <button className={clsName} onClick={props.handleClick}>
      {props.children}
    </button>
  )
}
