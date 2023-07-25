import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer} id="contacts">
            <div className={`container ${styles.nav}`}>
                <h2 className={styles.title}>Our Contacts</h2>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <h3 className={styles.subtitle}>Email</h3>
                        <a href="mailto:oceansaviourosr@gmail.com" className={styles.link}>oceansaviourosr@gmail.com</a>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.subtitle}>Telegram</h3>
                        <a href="https://t.me/ocean_savior_channel" target="_blank" rel="noreferrer" className={styles.link}>Telegram channel</a>
                        <a href="https://t.me/ocean_savior_chat" target="_blank" rel="noreferrer" className={styles.link}>Telegram chat</a>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.subtitle}>Twitter</h3>
                        <a href="https://twitter.com/oceansavior_osr" target="_blank" rel="noreferrer" className={styles.link}>@oceansavior</a>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.subtitle}>Discord</h3>
                        <a href="https://discord.gg/Rj8S5mWp" target="_blank" rel="noreferrer" className={styles.link}>OceanSavior Server</a>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.subtitle}>Medium</h3>
                        <a href="https://medium.com/@oceansaviour" target="_blank" rel="noreferrer" className={styles.link}>@oceansaviour</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer