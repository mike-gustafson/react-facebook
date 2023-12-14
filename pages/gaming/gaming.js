import GamesWeLove from "./main/GamesWeLove";
import TopPicksForYou from "./main/TopPicksForYou";
import HappeningNow from "./main/HappeningNow";
import MostPlayedGames from "./main/MostPlayedGames";
import FeaturedGames from "./main/FeaturedGames";
import AllGames from "./main/AllGames";
import styles from '../../styles/Gaming.module.css';
import Sidebar from "../gaming/sidebar/Sidebar";

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