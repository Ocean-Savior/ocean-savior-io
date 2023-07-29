import React, { useEffect, useRef } from 'react'
import styles from './About.module.scss'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutContent = useRef(null);
    const aboutImage = useRef(null);
    const missionContent = useRef(null);
    const missionImage = useRef(null);

    useEffect(() => {
        const aboutContentAnimation = aboutContent.current;
        const aboutImageAnimation = aboutImage.current;
        const missionContentAnimation = missionContent.current;
        const missionImageAnimation = missionImage.current;

        gsap.set(aboutContentAnimation, { opacity: 0, xPercent: -20 });
        gsap.set(aboutImageAnimation, { opacity: 0, xPercent: 20 });
        gsap.set(missionContentAnimation, { opacity: 0, xPercent: 20 });
        gsap.set(missionImageAnimation, { opacity: 0, xPercent: -20 });

        gsap.to(aboutContentAnimation, {
            opacity: 1,
            xPercent: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: aboutContentAnimation,
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });

        gsap.to(aboutImageAnimation, {
            opacity: 1,
            xPercent: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: aboutImageAnimation,
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
        
        gsap.to(missionImageAnimation, {
            opacity: 1,
            xPercent: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: missionImageAnimation,
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <>
            <section id="about" className={styles.about}>
                <div className={`container ${styles.body}`}>
                    <div className={styles.content} ref={aboutContent}>
                        <h2 className={styles.title}>About project</h2>
                        <p className={styles.p}>OceanSavior (OSR) is a cryptocurrency with a special focus on the protection and preservation of the world's oceans. Our mission is to engage the global community in addressing critical issues of ocean pollution and the threat to marine ecosystems, stimulating innovation, and supporting projects aimed at cleaning and restoring the oceanic environment.</p>
                        <a href="https://drive.google.com/file/d/1Am1zH3ktkYbcgbWK0YDs2plFBdnusCbV/view" target="_blank" rel="noreferrer" className={`btn2 ${styles.btn}`}>Whitepaper</a>
                    </div>
                    <div className={styles.img} ref={aboutImage}>
                        <img src="/about.png" alt=""/>
                    </div>
                </div>
            </section>
            <section id="mission" className={`${styles.about} ${styles.about2}`}>
                <div className={`container ${styles.body}`}>
                    <div className={styles.content} ref={missionContent}>
                        <h2 className={styles.title}>Mission</h2>
                        <p className={styles.p}>Our mission is to contribute to the creation of healthy, clean, and sustainable oceans for future generations. We aim to be a catalyst for change, mobilizing investments, resources, and ideas in service of the common goal - the protection of our global oceans from pollution and destruction.</p>
                        <a href="https://drive.google.com/file/d/1Am1zH3ktkYbcgbWK0YDs2plFBdnusCbV/view" target="_blank" rel="noreferrer" className={`btn2 ${styles.btn}`}>Whitepaper</a>
                    </div>
                    <div className={styles.img} ref={missionImage}>
                        <img src="/mission.png" alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About