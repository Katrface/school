import styles from "./styles.css";
import Navigation from "../Navigation";

const Header = (props) => {
    const navLinks = [
        { name: "Новости", link: "/news" },
        { name: "События", link: "/events" },
        { name: "О школе", link: "/about" }
    ];

    return (
        <header className={props.className}>
            <div className="logo">школа 27</div>
            <div className="header__nav">
                <Navigation links={navLinks}></Navigation>
            </div>
        </header>
    );
};

export default Header;
