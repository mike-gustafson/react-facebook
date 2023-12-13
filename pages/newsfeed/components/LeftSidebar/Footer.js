import style from '../../../../styles/Newsfeed.module.css'

export default function Footer() {
    return (
    <div className={style.sidebarFooter}>
        <ul className={style.sidebarFooterList}>
            <li>Privacy<span> · </span></li>
            <li>Terms<span> · </span></li>
            <li>Advertising<span> · </span></li>
            <li>Ad choices<span> · </span></li>
            <li>Cookies<span> · </span></li>
            <li>More<span> · </span></li>
            <li>Fakebook © 2023</li>
        </ul>
    </div>
    )
}