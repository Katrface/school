import React from "react";

import clearCSS from "../config/clear.css";
import styles from "./styles.css";

import Navigation from "../Navigation";
import Menu from "../Menu";
import Main from "../Main";

import useAdaptiveDesignMode from "../../hooks/useAdaptiveDesignMode";
import navigationService from "../../services/navigation";
import menuService from "../../services/menu";
import useFlag from "../../hooks/useFlag";
import HideMenu from "../Main/HideMenu";


function SchoolApp() {
    const adaptiveDesignMode = useAdaptiveDesignMode();

    const nav = navigationService.getNavigation();
    const menuLinks = menuService.getMenuLinks();

    const {flag, changeFlag} = useFlag();

    const menuViewMode = {isOpen: flag, changeMode: changeFlag};


    //TODO при адаптиве перерендеривается все, решается добавлением общего хранилища (redux)
    return (
        <React.Fragment>
            <HideMenu menuViewMode={menuViewMode}/>
                <Navigation.NavigationCombine
                    adaptiveDisignMode={adaptiveDesignMode.mode}
                    nav={nav}
                    menuViewMode={menuViewMode}
                />
                <Main adaptiveDesignMode={adaptiveDesignMode.mode}/>
                <Menu.Hidden.HiddenMenuCombine
                    adaptiveDisignMode={adaptiveDesignMode.mode}
                    links={menuLinks}
                    isOpen={flag}
                />
        </React.Fragment>
    );
}

export default SchoolApp;
