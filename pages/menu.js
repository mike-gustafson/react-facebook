import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Menu({ username, message }) {
    return (
        <div className={styles.menu}>
            <h2>
                <Image src='/s-l1600.png' alt='engineer' width='20' height='20'/>
                Messages 
                <Image src='/exclamation.png' alt='notification' width='20' height='20'/>
                Notifications
            </h2>
        </div>
    )
    }