import React from "react";

import clearSCC from "../config/clear.css";
import styles from "./styles.css";

import ArticleCardList from "../components/ArticleCardList";
import Navigation from "../Navigation";
import Menu from "../Menu";

import data from "../../data/articleCards";
import useAdaptiveDesignMode from "../../hooks/useAdaptiveDesignMode";
import navigationService from "../../services/navigation";
import menuService from "../../services/menu";
import useFlag from "../../hooks/useFlag";

function SchoolApp() {
    const articleCards = data.articleCards;
    const adaptiveDesignMode = useAdaptiveDesignMode();

    const navLinks = navigationService.getNavigationLinks();
    const menuLinks = menuService.getMenuLinks();

    const {flag, changeFlag} = useFlag();

    return (
        <React.Fragment>
            <Navigation.NavigationCombine
                adaptiveDisignMode={adaptiveDesignMode.mode}
                links={navLinks}
                menuViewMode={{isOpen: flag, changeMode: changeFlag}}
            />
            {/* <Main/>
            <ButtonHiddenMenu/> */}
            <div className="container">
                <ArticleCardList articleCards={articleCards}></ArticleCardList>
            </div>
            <Menu.Hidden.HiddenMenuCombine
                adaptiveDisignMode={adaptiveDesignMode.mode}
                links={menuLinks}
                isOpen={flag}
            />
        </React.Fragment>
    );
}

export default SchoolApp;
