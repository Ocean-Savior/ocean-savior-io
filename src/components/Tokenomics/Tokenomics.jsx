import React, { useEffect, useRef } from 'react'
import styles from './Tokenomics.module.scss'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Tokenomics = () => {
    const text = useRef([]);
    const rightToLeft = useRef([]);
    const leftToRight = useRef([]);

    useEffect(() => {
        const textAnimation = text.current;
        const rightToLeftAnimation = rightToLeft.current;
        const leftToRightAnimation = leftToRight.current;

        gsap.set(textAnimation, { opacity: 0, y: 100 });
        gsap.set(rightToLeftAnimation, { opacity: 0, x: 100 });
        gsap.set(leftToRightAnimation, { opacity: 0, x: -100 });

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

        gsap.to(rightToLeftAnimation, {
            opacity: 1,
            x: 0,
            stagger: 0.2,
            duration: 0.7,
            scrollTrigger: {
                trigger: rightToLeftAnimation,
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });

        gsap.to(leftToRightAnimation, {
            opacity: 1,
            x: 0,
            stagger: 0.2,
            duration: 0.7,
            scrollTrigger: {
                trigger: leftToRightAnimation,
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });
    }, []);
    return (
        <section className={styles.tokenomics} id="tokenomics">
            <div className={`container ${styles.body}`}>
                <h2 className={styles.title} ref={(e) => text.current.push(e)}>Tokenomics</h2>
                <div className={styles.content}>
                    <div className={`${styles.item} ${styles.big}`} ref={(e) => leftToRight.current.push(e)}>
                        <div className={styles.tag}>Total Supply</div>
                            <p className={styles.itemTitle}>1.000.000.000 OceanSavior</p>
                        <img draggable="false" src="/big-logo.png" alt="" />
                        <div className={styles.bg}>Total Supply</div>
                    </div>
                    <div className={styles.col}>
                        <div className={`${styles.item} ${styles.cef} ${styles.small}`} ref={(e) => rightToLeft.current.push(e)}>
                            <div className={styles.tag}>Total Security</div>
                            <p className={styles.itemTitle}>Liquidity locked up for a 10 years</p>
                            <div className={styles.bg}>Total Security</div>
                        </div>
                        <div className={`${styles.item} ${styles.small}`} ref={(e) => rightToLeft.current.push(e)}>
                            <div className={styles.tag}>Sell Tax</div>
                            <p className={styles.p}>10% Sell Tax</p>
                            <p className={styles.p}>2% Backflow</p>
                            <p className={styles.p}>2% Burn</p>
                            <p className={styles.p}>2% Marketing</p>
                            <p className={styles.p}>4% Philanthropy</p>
                            <div className={styles.bg}>Sell Tax</div>
                        </div>
                        <div className={`${styles.item} ${styles.small}`} ref={(e) => rightToLeft.current.push(e)}>
                            <div className={styles.tag}>Buy Tax</div>
                            <p className={styles.p}>10% Buy Tax</p>
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
