import React, { useState } from 'react'
import styles from './Header.module.scss';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const openMenu = () => {
        if(menuOpened){
            closeMenu()
        }else{
            setMenuOpened(true)
            document.body.classList.add('oh')
        }
    }

    const closeMenu = () => {
        if(menuOpened){
            setMenuOpened(false)
            document.body.classList.remove('oh')
        }
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
                        <a href="#tokenomics" className={styles.link} onClick={() => closeMenu()}>Tokenomics</a>
                    </li>
                    <li className={styles.li}>
                        <a href="https://drive.google.com/file/d/1Am1zH3ktkYbcgbWK0YDs2plFBdnusCbV/view" target="_blank" rel="noreferrer" className={styles.link} onClick={() => closeMenu()}>Whitepaper</a>
                    </li>
                    <li className={styles.li}>
                        <a href="#mission" className={styles.link} onClick={() => closeMenu()}>Mission</a>
                    </li>
                    <a href="#connect" className={`btn ${styles.btn}`}>Connect Wallet</a>
                </ul>
                <a href="#connect" className={`btn ${styles.btn}`}>Connect Wallet</a>
                <button className={`${styles.button} ${menuOpened ? styles.open : ''}`} onClick={() => openMenu()}>
                    <span className={styles.line}></span>
                </button>
            </nav>
        </header>
    )
}

export default Header