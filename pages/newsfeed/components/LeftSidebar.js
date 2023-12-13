// components
import User from './LeftSidebar/User';
import Footer from './LeftSidebar/Footer';
import Categories from './LeftSidebar/Categories';
import YourShortcuts from './LeftSidebar/YourShortcuts';

// styles
import style from '../../../styles/Newsfeed.module.css';

// LeftSidebar Component -- left sidebar for newsfeed page
export default function LeftSidebar() {

    // Render the left sidebar
    return (
        <div className={style.left_sidebar}>
            <User />
            <Categories />
            <YourShortcuts />
            <Footer />
        </div>
    );
};
