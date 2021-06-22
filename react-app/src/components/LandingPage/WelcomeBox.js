import React from 'react'
import styles from '../../css-modules/LandingPage.module.css'

export default function WelcomeBox() {
    return (
        <div className={styles.welcomeContainer}> 
            <div className={styles.welcomeTextBox}>
                <h1 className={styles.header}>Welcome to Artifacts</h1>
                <h2 className={styles.subHeader}>Find treasures across time</h2>
            </div>

        </div>
    )
}
