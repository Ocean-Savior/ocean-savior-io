import React from 'react'
import styles from './About.module.scss'

const About = () => {
    return (
        <>
            <section id="about" className={styles.about}>
                <div className={`container ${styles.body}`}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>About project</h2>
                        <p className={styles.p}>OceanSavior (OSR) is a cryptocurrency with a special focus on the protection and preservation of the world's oceans. Our mission is to engage the global community in addressing critical issues of ocean pollution and the threat to marine ecosystems, stimulating innovation, and supporting projects aimed at cleaning and restoring the oceanic environment.</p>
                        <a href="#whitepaper" className={`btn2 ${styles.btn}`}>Whitepaper</a>
                    </div>
                    <div className={styles.img}>
                        <img src="/about.png" alt=""/>
                    </div>
                </div>
            </section>
            <section id="mission" className={`${styles.about} ${styles.about2}`}>
                <div className={`container ${styles.body}`}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Mission</h2>
                        <p className={styles.p}>Our mission is to contribute to the creation of healthy, clean, and sustainable oceans for future generations. We aim to be a catalyst for change, mobilizing investments, resources, and ideas in service of the common goal - the protection of our global oceans from pollution and destruction.</p>
                        <a href="#whitepaper" className={`btn2 ${styles.btn}`}>Whitepaper</a>
                    </div>
                    <div className={styles.img}>
                        <img src="/mission.png" alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About