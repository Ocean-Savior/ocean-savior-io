import React, { useEffect, useRef } from 'react'
import styles from './Problem.module.scss'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
    const aboutContent = useRef(null);

    useEffect(() => {
        const aboutContentAnimation = aboutContent.current;

        gsap.set(aboutContentAnimation, { opacity: 0, y: 100 });

        gsap.to(aboutContentAnimation, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: aboutContentAnimation,
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <section id="problem" className={styles.problem}>
            <div className={`container ${styles.body}`} ref={aboutContent}>
                <h2 className={styles.title}>The problem of ocean pollution:</h2>
                <p className={styles.p}>Ocean pollution has become one of the most serious environmental problems of our time. Every year, millions of tons of plastic and other waste end up in the world's oceans, posing a threat to marine life and humanity. Cleaning and restoring the marine environment require significant efforts and resources on a global scale. OceanSavior (OSR) offers an innovative approach to addressing the issue of ocean pollution. Through blockchain technology and cryptocurrency, we provide transparency, efficiency, and flexibility in funding environmental projects and initiatives. OceanSavior (OSR) facilitates the mobilization of funds, community involvement, and resource allocation for maximum environmental impact.</p>
                <div className={styles.row}>
                    <a href="#presale" className={`btn ${styles.btn}`}>Presale</a>
                    <a href="#contacts" className={`btn2 ${styles.btn2}`}>Join the community</a>
                </div>
            </div>
        </section>
    )
}

export default Problem