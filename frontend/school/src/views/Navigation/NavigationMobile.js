import styles from "./stylesMobile.css";
import icons from "../config/icons/icons.css";
import ButtonHiddenMenuMobile from "../Menu/ButtonHiddenMenu/ButtonHiddenMenuMobile";

import {NavLink} from "react-router-dom";

const NavigationMobile = (props) => {
    const links = props.links;
    const menuViewMode = props.menuViewMode;

    const closeMenu = () => {
        if (menuViewMode.isOpen) {
            menuViewMode.changeMode();
        }
    }

    const bottomMenuCells = links.map((linkObj) => {
        const iconClassName = linkObj.iconClass + " bottom-menu__icon";
        return (
            <NavigationMobileCell key={linkObj.name}>
                <NavLink
                    onClick={closeMenu}
                    exact to={linkObj.link}
                    isActive={(match, location) => {
                        return !menuViewMode.isOpen && (location.pathname === linkObj.link);
                    }}
                    activeClassName="active"
                >
                    <i className={iconClassName}/>
                </NavLink>
            </NavigationMobileCell>
        );
    });

    return (
        <nav className="bottom-menu bottom-menu__fixed">
            {bottomMenuCells}
            <NavigationMobileCell>
                <ButtonHiddenMenuMobile menuViewMode={menuViewMode}/>
            </NavigationMobileCell>
        </nav>
    );
};

export default NavigationMobile;

const NavigationMobileCell = (props) => {
    return(
        <div className="bottom-menu__cell">
            {props.children}
        </div>
    )
}