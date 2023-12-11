import Link from 'next/link';
import styles from '../../../styles/Sidebar.module.css';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CasinoIcon from '@mui/icons-material/Casino';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DeckIcon from '@mui/icons-material/Deck';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import BuildIcon from '@mui/icons-material/Build';
import BusinessIcon from '@mui/icons-material/Business';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SchoolIcon from '@mui/icons-material/School';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import ExtensionIcon from '@mui/icons-material/Extension';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';


const array = ['All games','Action','Adventure','Arcade','Battle','Board','Builder','Card','Casino','Design','Match','Merge','Puzzle','Quick Play','Quiz and Trivia','Racing','Role Playing','Runner','Simulation','Solitaire','Sports','Word']

const iconMap = {
  'All games': VideogameAssetIcon,
  'Action': SportsSoccerIcon,
  'Adventure': DirectionsCarIcon,
  'Arcade': CasinoIcon,
  'Battle': DirectionsRunIcon,
  'Board': DeckIcon,
  'Builder': BuildIcon,
  'Card': CardGiftcardIcon,
  'Casino': CasinoIcon,
  'Design': DesignServicesIcon,
  'Match': SportsEsportsIcon,
  'Merge': MergeTypeIcon,
  'Puzzle': ExtensionIcon,
  'Quick Play': AlarmOnIcon,
  'Quiz and Trivia': MenuBookIcon,
  'Racing': SportsMotorsportsIcon,
  'Role Playing': SportsKabaddiIcon,
  'Runner': DirectionsRunIcon,
  'Simulation': BusinessIcon,
  'Solitaire': CardGiftcardIcon,
  'Sports': SportsKabaddiIcon,
  'Word': SchoolIcon,
};

export default function Categories() {
  const CategoriesArray = array.map((s, idx) => {
    const IconComponent = iconMap[s];
    return (
      <div key={idx} className={styles.sidebarLink}>
        {IconComponent && <IconComponent className={styles.link_icon} />}{s}
      </div>
    );
  });

  return (
    <div className={styles.sidebar_categories_region}>
        <h3 className={styles.title}>Categories</h3>
        {CategoriesArray}
        <br/>
      </div>
  );
}
