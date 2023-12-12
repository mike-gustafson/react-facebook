import GamesWeLove from "./main/01-games-we-love";
import TopPicksForYou from "./main/02-top-picks-for-you";
import HappeningNow from "./main/03-happening-now";
import MostPlayedGames from "./main/04-most-played-games";
import FeaturedGames from "./main/05-featured-games";
import AllGames from "./main/06-all-games";
import styles from '../../styles/Gaming.module.css';
import Sidebar from "./sidebar";
export default function Gaming() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
            <Sidebar />
            </div>
            <div className={styles.main}>
            <GamesWeLove />
            <TopPicksForYou />
            <HappeningNow />
            <MostPlayedGames />
            <FeaturedGames />
            <AllGames />
            </div>
        </div>
    )
}