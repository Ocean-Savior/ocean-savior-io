import React, { useState } from "react";
import styles from "./Header.module.scss";
import { ethers } from "ethers";
import { useAppContext } from '../../hooks/AppContext.js';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [account, setAccount] = useState("0x0000");

  const [isConnected, setIsConnected] = useState(false);

  const { provider, setProvider } = useAppContext();

  const openMenu = () => {
    if (menuOpened) {
      closeMenu();
    } else {
      setMenuOpened(true);
      document.body.classList.add("oh");
    }
  };

  const closeMenu = () => {
    if (menuOpened) {
      setMenuOpened(false);
      document.body.classList.remove("oh");
    }
  };

  async function connectWallet() {
    if (window.ethereum == null) {
      console.log("MetaMask not installed");
    } else {
      try {
        let provider = new ethers.providers.Web3Provider(window.ethereum);

        setProvider(provider);

        const address = await provider.send("eth_requestAccounts", []);

        setAccount(address[0]);

        setIsConnected(true);

        console.log("mm is connected");
        // signer = provider.getSigner();
      } catch (error) {
        console.log("Error connection...");

        console.log(error);
      }
    }
  }

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <a href="/" className={styles.logo}>
          <img src="/logo.png" alt="" />
          <span>OSR</span>
        </a>
        <ul className={`${styles.list} ${menuOpened ? styles.open : ""}`}>
          <li className={styles.li}>
            <a
              href="#tokenomics"
              className={styles.link}
              onClick={() => closeMenu()}
            >
              Tokenomics
            </a>
          </li>
          <li className={styles.li}>
            <a
              href="https://drive.google.com/file/d/1Am1zH3ktkYbcgbWK0YDs2plFBdnusCbV/view"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
              onClick={() => closeMenu()}
            >
              Whitepaper
            </a>
          </li>
          <li className={styles.li}>
            <a
              href="#mission"
              className={styles.link}
              onClick={() => closeMenu()}
            >
              Mission
            </a>
          </li>
          <a onClick={connectWallet} className={`btn ${styles.btn}`}>
            {!isConnected ? "Connect Wallet" : account.slice(0, -29)}
          </a>
        </ul>
        <a onClick={connectWallet} className={`btn ${styles.btn}`}>
          {!isConnected ? "Connect Wallet" : account.slice(0, -29)}
        </a>
        <button
          className={`${styles.button} ${menuOpened ? styles.open : ""}`}
          onClick={() => openMenu()}
        >
          <span className={styles.line}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
