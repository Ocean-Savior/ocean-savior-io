import React, { useEffect, useRef } from 'react'
import styles from './Partners.module.scss'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
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
        <section className={styles.partners}>
            <div className={styles.projects} id="projects">
                <div className={`container ${styles.projectsBody}`}>
                    <h2 className={styles.projectsTitle} ref={(e) => text.current.push(e)}>Partnerships with environmental organizations and projects:</h2>
                    <div className={styles.projectsItem} ref={(e) => text.current.push(e)}>To realize our mission, we strive to cooperate with various environmental organizations, scientific institutions and projects actively engaged in cleaning and preserving the marine environment. OceanSavior (OSR) provides financial support, technical expertise and resources to accelerate the development and implementation of innovative solutions in the field of ocean conservation.</div>
                    <div className={styles.projectsRow}>
                        <div className={styles.projectsItemSm} ref={(e) => text.current.push(e)}>OceanSavior (OSR) offers a unique combination of technology, innovation and activism, allowing everyone to contribute to the fight for healthy and clean oceans. Join our project and become part of a global movement aimed at creating a green and sustainable future for our planet.</div>
                        <div className={styles.projectsItemSm} ref={(e) => text.current.push(e)}>OceanSavior (OSR) includes in its activities the development and implementation of educational programs, workshops and seminars aimed at raising awareness of the problem of ocean pollution and stimulating active participation in solving this problem.</div>
                    </div>
                </div>
            </div>
            <div className={styles.road} id="road">
                <div className={`container ${styles.roadBody}`}>
                    <h2 className={styles.roadTitle} ref={(e) => text.current.push(e)}>Road map</h2>
                    <div className={styles.roadTrack} ref={(e) => text.current.push(e)}></div>
                    <div className={styles.roadRow}>
                        <div className={styles.roadItem} ref={(e) => text.current.push(e)}>
                            <p className={styles.roadTag}>Phase 01</p>
                            <p className={styles.roadYear}>2022</p>
                            <p className={styles.roadP}>Team formation.Investigation of existing problems of ocean pollution.</p>
                            <p className={styles.roadP}>Define the goals of OceanSavior (OSR) in combating ocean pollution and preserving marine ecosystems.</p>
                            <p className={styles.roadP}>Partnerships with environmental organizations and private companies.</p>
                            <p className={styles.roadP}>Creating your own website.Development of a smart contract and a mechanism for financing and allocating funds for environmental projects.</p>
                        </div>
                        <div className={styles.roadItem} ref={(e) => text.current.push(e)}>
                            <p className={styles.roadTag}>Phase 02</p>
                            <p className={styles.roadYear}>2023</p>
                            <p className={styles.roadP}>Presale and launch.</p>
                            <p className={styles.roadP}>Crypto influencers.</p>
                            <p className={styles.roadP}>100.000+ holders.</p>
                            <p className={styles.roadP}>Crypto website promote.</p>
                            <p className={styles.roadP}>The team relinquishes ownership of the contract.</p>
                            <p className={styles.roadP}>Focus on global expansion.</p>
                            <p className={styles.roadP}>Donations to projects that are engaged in saving the world's oceans.</p>
                            <p className={styles.roadP}>Buyback and burn.</p>
                        </div>
                        <div className={styles.roadItem} ref={(e) => text.current.push(e)}>
                            <p className={styles.roadTag}>Phase 03</p>
                            <p className={styles.roadYear}>2024</p>
                            <p className={styles.roadP}>Development of new and improvement of existing technologies for cleaning the oceans.</p>
                            <p className={styles.roadP}>Creation of prototypes of ocean cleaning systems and verification of their operability.</p>
                            <p className={styles.roadP}>Conclusion of contracts with shipbuilding companies for the production of special vessels for garbage collection at sea.</p>
                            <p className={styles.roadP}>500.000+ holders.</p>
                            <p className={styles.roadP}>Buyback and burn</p>
                            <p className={styles.roadP}>Donations to projects that are engaged in saving the world's oceans.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
