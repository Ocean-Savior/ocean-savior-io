import React from 'react'
import styles from './Clients.module.scss'

const Clients = () => {
    return (
        <section className={styles.clients} id="clients">
            <div className={`container ${styles.body}`}>
                <img src="/client-1.png" alt="" draggable={false}/>
                <img src="/client-2.png" alt="" draggable={false}/>
                <img src="/client-3.png" alt="" draggable={false}/>
                <img src="/client-4.png" alt="" draggable={false}/>
                <img src="/client-5.png" alt="" draggable={false}/>
                <img src="/client-6.png" alt="" draggable={false}/>
                <img src="/client-7.png" alt="" draggable={false}/>
                <img src="/client-8.png" alt="" draggable={false}/>
                <img src="/client-9.png" alt="" draggable={false}/>
            </div>
        </section>
    )
}

export default Clients
