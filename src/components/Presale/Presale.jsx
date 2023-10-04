import React, { useEffect, useRef } from "react";
import styles from "./Presale.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ethers } from "ethers";
import { useAppContext } from "../../hooks/AppContext.js";
import auctionArtifact from "../../web3/token-sale.json";

gsap.registerPlugin(ScrollTrigger);

const Presale = () => {
  const text = useRef([]);

  const value = useRef(0);

  const { provider } = useAppContext();

  useEffect(() => {
    const textAnimation = text.current;

    gsap.set(textAnimation, { opacity: 0, y: 100 });

    gsap.to(textAnimation, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.7,
      scrollTrigger: {
        trigger: textAnimation,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  async function buy(event) {
    try {
      event.preventDefault();

      const dai = value.current.value;
  
      const overrides = {
        value: ethers.utils.parseUnits(dai.toString(), 18),
        gasLimit: 110000,
      };
  
      const signer = provider.getSigner();
  
      const contract = new ethers.Contract(
        auctionArtifact.address,
        auctionArtifact.abi,
        provider
      );
  
      const contractWithSigner = contract.connect(signer);
  
      console.log(provider);
  
      await contractWithSigner.buy(overrides);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={styles.presale} id="presale">
      <div className={`container ${styles.body}`}>
        <h2 className={styles.title} ref={text}>
          Presale
        </h2>
        <form onSubmit={buy} className={styles.content} ref={text}>
          <div className={styles.item}>
            <div className={styles.row}>
              <p className={styles.name}>Total:</p>
              <p className={styles.value}>100.000.000 OSR</p>
            </div>
            <div className={styles.row}>
              <p className={styles.name}>Min buy:</p>
              <p className={styles.value}>0.12 BNB</p>
            </div>
            <div className={styles.row}>
              <p className={styles.name}>Max buy:</p>
              <p className={styles.value}>45 BNB</p>
            </div>
            <div className={styles.row}>
              <p className={styles.name}>Price:</p>
              <p className={styles.value}>0.0009 BNB</p>
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
              <input type="text" ref={value} className={styles.input} />
              <button className={styles.btn}>MAX</button>
            </div>
            <p className={styles.info}>BEP-20 chain</p>
            <button type="disabled" className={`btn ${styles.buy_btn}`}>
              Buy
            </button>
            {/* <div className={styles.row}>
              <p className={styles.name}>Your balance:</p>
              <p className={styles.value}>100.000.000 OSR</p>
            </div> */}
            {/* <p className={styles.danger}>you can claim tokens after presale</p> */}
          </div>
          <div className={styles.img}>
            <img src="/presale-img.png" alt="" draggable={false} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Presale;
