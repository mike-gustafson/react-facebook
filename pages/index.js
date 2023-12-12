import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Newsfeed from './newsfeed/newsfeed';
import RandomUpdates from './random-updates';
import Gaming from './gaming/gaming';
import Nav from './nav'

  export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState('Newsfeed');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fakebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.navBarContainer}>
        <Nav onMenuItemClick={handleMenuItemClick} />
      </div>
      <div className={styles.contentContainer}>
          {activeMenuItem === 'Newsfeed' && (
              <Newsfeed />
          )}
          {activeMenuItem === 'RandomUpdates' && (
            <>
              <h1>Random Updates</h1>
              <RandomUpdates />
            </>
          )}
          {activeMenuItem === 'Gaming' && (
              <Gaming />
          )}
      </div>
      
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}