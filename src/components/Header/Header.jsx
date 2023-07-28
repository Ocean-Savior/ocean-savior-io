import React from 'react'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <a href="/" className={styles.logo}>
                    <img src="/logo.png" alt=""/>
                    <span>OSR</span>
                </a>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <a href="#tokenomics" className={styles.link}>Tokenomics</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#presale" className={styles.link}>Whitepaper</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#mission" className={styles.link}>Mission</a>
                    </li>
                </ul>
                <a href="#connect" className={`btn ${styles.btn}`}>Connect Wallet</a>
            </nav>
        </header>
    )
}

export default Header