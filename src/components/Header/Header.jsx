import React, { useState } from 'react'
import styles from './Header.module.scss';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const setMenu = () => {
        setMenuOpened(!menuOpened)
        document.body.classList.toggle('oh')
    }

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <a href="/" className={styles.logo}>
                    <img src="/logo.png" alt=""/>
                    <span>OSR</span>
                </a>
                <ul className={`${styles.list} ${menuOpened ? styles.open : ''}`}>
                    <li className={styles.li}>
                        <a href="#tokenomics" className={styles.link} onClick={() => setMenu()}>Tokenomics</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#presale" className={styles.link} onClick={() => setMenu()}>Whitepaper</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#mission" className={styles.link} onClick={() => setMenu()}>Mission</a>
                    </li>
                </ul>
                <a href="#connect" className={`btn ${styles.btn}`}>Connect Wallet</a>
                <button className={`${styles.button} ${menuOpened ? styles.open : ''}`} onClick={() => setMenu()}>
                    <span className={styles.line}></span>
                </button>
            </nav>
        </header>
    )
}

export default Header