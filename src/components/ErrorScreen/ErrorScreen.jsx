import React from 'react';
import styles from './ErrorScreen.module.scss';

export default function ErrorScreen(props) {
    return (
        <div className={styles.errorScreen}>
            <div className={styles.errorTitle}>
                Error
            </div>
            <div className={styles.errorMessage}>
                {props.children}
            </div>
        </div>
    )
}
