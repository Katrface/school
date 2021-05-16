import styles from "./stylesDesktop.css";
import TextLink from "../components/TextLink";
import container from "../config/container.css";
import {NavLink} from "react-router-dom";

const NavigationDesktop = (props) => {
    const links = props.nav.links;

    const navLinks = links.map((linkObj) => {
        return (
            <NavLink
                key={linkObj.name}
                exact to={linkObj.link}
                activeClassName="header-menu__link__active">
                <NavigationDesktopLink link={linkObj} />
            </NavLink>);
    });

    return (
        <header className="container">
            <div className="logo">школа 27</div>
            <div className="header__nav">
                <nav>
                    {navLinks}
                </nav>
            </div>
        </header>
    );
};

// TODO дублирует NavigationMobileCell
const NavigationDesktopLink = (props) => {
    const link = props.link;

    return (
        <div className="header-menu__link">
            <div className="header-menu__link__icon" dangerouslySetInnerHTML={{ __html: link.iconSVG }}/>
            <div className="header-menu__link__name">{link.name}</div>
        </div>
    );
};

export default NavigationDesktop;
