import React from 'react'
import styles from './Presale.module.scss'

const Presale = () => {
    return (
        <section className={styles.presale} id="presale">
            <div className={`container ${styles.body}`}>
                <h2 className={styles.title}>Presale</h2>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <p className={styles.subtitle}>Presale progress:</p>
                        <div className={styles.progress}>
                            <div className={styles.track} style={{width: "10%"}}></div>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.name}>Total:</p>
                            <p className={styles.value}>100.000.000 OSR</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.name}>Soft cap:</p>
                            <p className={styles.value}>50.000 BUSD</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.name}>Hard cap:</p>
                            <p className={styles.value}>2.000.000 BUSD</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.name}>Min buy:</p>
                            <p className={styles.value}>25 BUSD</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.name}>Max buy:</p>
                            <p className={styles.value}>10.000 BUSD</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.name}>Price:</p>
                            <p className={styles.value}>0.2 BUSD</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.name}>Left total:</p>
                            <p className={styles.value}>100.000.000 OSR</p>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.name}>U’ll recieve:</p>
                            <p className={styles.value}>100.000.000 OSR</p>
                        </div>
                        <div className={styles.form}>
                            <input type="text" className={styles.input} />
                            <button className={styles.btn}>MAX</button>
                        </div>
                        <p className={styles.info}>BEP-20 chain</p>
                        <div className={styles.row}>
                            <p className={styles.name}>Balance:</p>
                            <p className={styles.value}>100.000.000 OSR</p>
                        </div>
                        <p className={styles.danger}>you can claim tokens after presale</p>
                    </div>
                    <div className={styles.img}>
                        <img src="/presale-img.png" alt="" draggable={false} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presale
