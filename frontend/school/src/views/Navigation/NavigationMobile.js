import styles from "./stylesMobile.css";

import {NavLink} from "react-router-dom";
import React from "react";

const NavigationMobile = (props) => {
    const links = props.nav.links;
    const menuCell = props.nav.menuCell;
    const menuViewMode = props.menuViewMode;

    const closeMenu = () => {
        if (menuViewMode.isOpen) {
            menuViewMode.changeMode();
        }
    }

    // TODO безопасность
    const bottomMenuCells = links.map((linkObj) => {
        return (
            <NavLink
                onClick={closeMenu}
                exact to={linkObj.link}
                isActive={(match, location) => {
                    return !menuViewMode.isOpen && (location.pathname === linkObj.link);
                }}
                activeClassName="bottom-menu__cell__active">
                <NavigationMobileCell cell={linkObj} />
            </NavLink>
        );
    });

    return (
        <nav className="bottom-menu bottom-menu__fixed">
            {bottomMenuCells}
            <ButtonHiddenMenuMobile menuViewMode={menuViewMode}>
                <NavigationMobileCell cell={menuCell}/>
            </ButtonHiddenMenuMobile>
        </nav>
    );
};

export default NavigationMobile;

const NavigationMobileCell = (props) => {
    const cell = props.cell;

    return(
        <div className="bottom-menu__cell">
            <div className="bottom-menu__cell__icon" dangerouslySetInnerHTML={{ __html: cell.iconSVG }}/>
            <div className="bottom-menu__cell__name">{cell.name}</div>
        </div>
    )
}

const ButtonHiddenMenuMobile = (props) => {
    const menuViewMode = props.menuViewMode;
    const classActive = menuViewMode.isOpen ? "bottom-menu__cell__active" : "";
    return (
        <button className={classActive} onClick={menuViewMode.changeMode}>
            {props.children}
        </button>
    );
};