import React from 'react'
import styles from '../../css-modules/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
                <h1>Created By</h1>
                <div className={styles.namesGrid}>
                    <p>
                        <a href="https://github.com/laurengus17"><i className="fab fa-github-square" /> </a>
                        <a href="https://www.linkedin.com/in/lauren-gustafson-7b8877b3/"><i className="fab fa-linkedin" /> </a>
                        Lauren Gustafson </p>
                    <p>
                        <a href="https://github.com/r-w-chen"><i className="fab fa-github-square" /> </a>
                        <a href="https://www.linkedin.com/in/rwchen/"><i className="fab fa-linkedin" /> </a>
                        Becky Chen </p>
                    <p>
                        <a href="https://github.com/kpowers005"><i className="fab fa-github-square" /> </a>
                        <a href="https://www.linkedin.com/in/kyle-powers-63739b133/"><i className="fab fa-linkedin" /> </a>
                        Kyle Powers </p>
                    <p>
                        <a href="https://github.com/dchen284"><i className="fab fa-github-square" /> </a>
                        <a href="https://www.linkedin.com/in/danny-chen-b2963110b"><i className="fab fa-linkedin" /> </a>
                        Danny Chen</p>
                </div>
            </div>
            
            <a href="https://github.com/dchen284/artifacts" className={styles.footerRight}>
                <h1>Project Repo</h1>
                <i className="fab fa-github fa-2x" />
            </a>
        </div>
    )
}
