import React from 'react'
import styles from './Intro.module.scss'

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={`container ${styles.body}`}> 
                <h1 className={styles.title}>OceanSavior</h1>
                <p className={styles.p}>Cryptocurrency created to protect and preserve the world's oceans. Our mission is to unite individuals, companies, and governments in the fight against ocean pollution and the preservation of marine ecosystems from plastic waste and other pollutants. Here you will find all the information about our project, the technologies used in OceanSavior, and how you can actively participate in protecting our oceans. We invite you to join our initiative and become part of the global movement for clean and healthy oceans. Together, we can change the future of our planet and leave a green legacy for future generations.</p>
                <div className={styles.row}>
                    <a href="#presale" className={`btn ${styles.btn}`}>Presale</a>
                    <a href="#contacts" className={`btn2 ${styles.btn2}`}>Join the community</a>
                </div>
            </div>
        </section>
    )
}

export default Intro