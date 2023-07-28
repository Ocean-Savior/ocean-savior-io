import React from 'react'
import styles from './Tokenomics.module.scss'

const Tokenomics = () => {
    return (
        <section className={styles.tokenomics} id="tokenomics">
            <div className={`container ${styles.body}`}>
                <h2 className={styles.title}>Tokenomics</h2>
                <div className={styles.content}>
                    <div className={`${styles.item} ${styles.big}`}>
                        <div className={styles.tag}>Total Supply</div>
                            <p className={styles.itemTitle}>1.000.000.000 OceanSavior</p>
                        <img draggable="false" src="/big-logo.png" alt="" />
                        <div className={styles.bg}>Total Supply</div>
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.item} ${styles.cef} ${styles.small}`}>
                            <div className={styles.tag}>Total Security</div>
                            <p className={styles.itemTitle}>Liquidity locked up for a 10 years</p>
                            <div className={styles.bg}>Total Security</div>
                        </div>
                        <div className={`${styles.item} ${styles.small}`}>
                            <div className={styles.tag}>Sell Tax</div>
                            <p className={styles.p}>10% Sell Tax</p>
                            <p className={styles.p}>2% Backflow</p>
                            <p className={styles.p}>2% Burn</p>
                            <p className={styles.p}>2% Marketing</p>
                            <p className={styles.p}>4% Philanthropy</p>
                            <div className={styles.bg}>Sell Tax</div>
                        </div>
                        <div className={`${styles.item} ${styles.small}`}>
                            <div className={styles.tag}>Buy Tax</div>
                            <p className={styles.p}>10% Sell Tax</p>
                            <p className={styles.p}>2% Backflow</p>
                            <p className={styles.p}>2% Burn</p>
                            <p className={styles.p}>2% Marketing</p>
                            <p className={styles.p}>4% Philanthropy</p>
                            <div className={styles.bg}>Buy Tax</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics
