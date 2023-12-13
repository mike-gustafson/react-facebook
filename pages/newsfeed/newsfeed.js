// componenets
import Feed from './components/Feed';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

//styles
import styles from '../../styles/Newsfeed.module.css'

// Newsfeed Component -- base layout for newsfeed page
export default function Newsfeed() {
  return (
    <div className={styles.newsfeed_container}> {/* container for all elements of the newsfeed */}
      <LeftSidebar />                           {/* left sidebar component -- primary menu for newsfeed */}
      <Feed />                                  {/* feed component -- central area of newsfeed */}
      <RightSidebar />                          {/* right sidebar component -- ads and contacts */}
    </div>
  );
}