import React, { useEffect, useRef } from 'react'
import styles from './Presale.module.scss'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Presale = () => {
    const text = useRef([]);

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

    return (
        <section className={styles.presale} id="presale">
            <div className={`container ${styles.body}`}>
                <h2 className={styles.title} ref={text}>Presale</h2>
                <div className={styles.content} ref={text}>
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
