import React from 'react'
import styles from './Plans.module.scss'

const Plans = () => {
  return (
    <section id="plans" className={styles.plans}>
        <div className={`container ${styles.body}`}>
            <h2 className={styles.title}>Development plans and strategy:</h2>
            <p className={styles.p}>We strive to create a global platform for cooperation, innovation and knowledge sharing in the field of ocean conservation. Our development plans and strategy include:</p>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.num}>01</p>
                    <p className={styles.text}>Financing and support of environmental projects and initiatives to clean up and restore the marine environment</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.num}>02</p>
                    <p className={styles.text}>Cooperation with international organizations and scientific institutions to coordinate efforts and exchange experience</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.num}>03</p>
                    <p className={styles.text}>Creating an educational platform to raise awareness of the problem of ocean pollution and encourage active participation in solving this problem</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plans