import React from 'react';
import styles from './LoadingScreen.module.scss';

export default function LoadingScreen() {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.spinner}></div>
        </div>
    )
}
