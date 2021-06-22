import React from 'react';
import WelcomeBox from './WelcomeBox';
import Categories from './Categories';
import styles from '../../css-modules/LandingPage.module.css'

export default function LandingPage() {
    return (
        <div className={styles.landingContainer}>
            <WelcomeBox />
            <Categories />
        </div>
    )
}
