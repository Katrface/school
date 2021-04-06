import React from "react";

import clearSCC from "../config/clear.css";
import styles from "./styles.css";

import Navigation from "../Navigation";
import Menu from "../Menu";
import Main from "../Main";

import useAdaptiveDesignMode from "../../hooks/useAdaptiveDesignMode";
import navigationService from "../../services/navigation";
import menuService from "../../services/menu";
import useFlag from "../../hooks/useFlag";


function SchoolApp() {
    const adaptiveDesignMode = useAdaptiveDesignMode();

    const navLinks = navigationService.getNavigationLinks();
    const menuLinks = menuService.getMenuLinks();

    const {flag, changeFlag} = useFlag();


    //TODO при адаптиве перерендеривается все, решается добавлением общего хранилища (redux)
    return (
        <React.Fragment>
                <Navigation.NavigationCombine
                    adaptiveDisignMode={adaptiveDesignMode.mode}
                    links={navLinks}
                    menuViewMode={{isOpen: flag, changeMode: changeFlag}}
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
