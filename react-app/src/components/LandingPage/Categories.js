import React from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../../css-modules/LandingPage.module.css'
//autoPlay
export default function Categories() {
    return (
        <div className={styles.categoryBox}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                    <div className={styles.singleCategory1}>
                        <div className={styles.categoryTextBox}>
                            <h1 className={styles.categoryHeader}>Prehistoric</h1>
                            <h2 className={styles.categorySubheader}>Before 3000 B.C.</h2>
                        <Link to="/category/Prehistoric">
                            <button className={styles.categoryLink}>Explore</button>
                        </Link>
                        </div>
                    </div>
                <div className={styles.singleCategory2}>
                    <div className={styles.categoryTextBox}>
                        <h1 className={styles.categoryHeader}>Antiquities</h1>
                        <h2 className={styles.categorySubheader}>3000 B.C. - 1500 A.D.</h2>
                        <Link to="/category/Antiquities">
                            <button className={styles.categoryLink}>Explore</button>
                        </Link>
                    </div>

                </div>
                <div className={styles.singleCategory3}>
                    <div className={styles.categoryTextBox}>
                        <h1 className={styles.categoryHeader}>Modern</h1>
                        <h2 className={styles.categorySubheader}>1500 A.D. - 2100 A.D.</h2>
                        <Link to="/category/Modern">
                            <button className={styles.categoryLink}>Explore</button>
                        </Link>
                    </div>  

                </div>
                <div className={styles.singleCategory4}>
                    <div className={styles.categoryTextBox}>
                        <h1 className={styles.categoryHeader}>Future</h1>
                        <h2 className={styles.categorySubheader}>After 2100 A.D.</h2>
                        <Link to="/category/Future">
                                <button className={styles.categoryLink}>Explore</button>
                        </Link>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
