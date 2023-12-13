import Head from 'next/head';
import { useState } from 'react';

// components
import NavBar from './NavBar';
import Tweets from './tweets/Tweets';
import Gaming from './gaming/gaming';
import Newsfeed from './newsfeed/Newsfeed';

// styles
import style from '../styles/Home.module.css';

// Home component -- creates the base layout for the app
export default function Home() {

  // set the default active menu item to Newsfeed on page load
  const [activeMenuItem, setActiveMenuItem] = useState('Newsfeed');

  // handleMenuItemClick -- sets the active menu item when an icon is clicked
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  // return the Home component - builds the base layout for the app
  return (
    <div className={style.container}>                    {/* container for the entire app */}

      <Head>                                             {/* set the page title and favicon */}  
        <title>Fakebook</title>                          {/* page title */}
        <link rel="icon" href="/favicon.ico" />          {/* favicon */}
      </Head>

      <div className={style.navBarContainer}>            {/* container for the nav bar component */}
        <NavBar onMenuItemClick={handleMenuItemClick} /> {/* nav bar component */}
      </div>

      <div className={style.contentContainer}>           {/* container for the main content of the app */}
        {activeMenuItem === 'Newsfeed' && (
          <Newsfeed />                                   // newsfeed component             
        )}
        {activeMenuItem === 'Tweets' && (               
          <Tweets />                                     // tweets component
        )}
        {activeMenuItem === 'Gaming' && (                               
          <Gaming />                                     // gaming component       
        )}
      </div>
    </div>
  );
}
