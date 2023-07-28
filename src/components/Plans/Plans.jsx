import React, { useEffect, useRef } from 'react'
import styles from './Plans.module.scss'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
    const text = useRef([]);
    const missionContent = useRef(null);

    useEffect(() => {
        const textAnimation = text.current;
        const missionContentAnimation = missionContent.current;

        gsap.set(textAnimation, { opacity: 0, y: 100 });
        gsap.set(missionContentAnimation, { opacity: 0, xPercent: 20 });

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

        gsap.to(missionContentAnimation, {
            opacity: 1,
            xPercent: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: missionContentAnimation,
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <section id="plans" className={styles.plans}>
            <div className={`container ${styles.body}`}>
                <h2 className={styles.title} ref={(e) => text.current.push(e)}>Development plans and strategy:</h2>
                <p className={styles.p} ref={(e) => text.current.push(e)}>We strive to create a global platform for cooperation, innovation and knowledge sharing in the field of ocean conservation. Our development plans and strategy include:</p>
                <div className={styles.content}>
                    <div className={styles.item} ref={(e) => text.current.push(e)}>
                        <p className={styles.num}>01</p>
                        <p className={styles.text}>Financing and support of environmental projects and initiatives to clean up and restore the marine environment</p>
                    </div>
                    <div className={styles.item} ref={(e) => text.current.push(e)}>
                        <p className={styles.num}>02</p>
                        <p className={styles.text}>Cooperation with international organizations and scientific institutions to coordinate efforts and exchange experience</p>
                    </div>
                    <div className={styles.item} ref={(e) => text.current.push(e)}>
                        <p className={styles.num}>03</p>
                        <p className={styles.text}>Creating an educational platform to raise awareness of the problem of ocean pollution and encourage active participation in solving this problem</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans