import React from "react";

import clearSCC from "../config/clear.css";
import styles from "./styles.css";

import ArticleCardList from "../ArticleCardList";
import Navigation from "../Navigation";

import data from "../../data/articleCards";
import useAdaptiveDesignMode from "../../hooks/useAdaptiveDesignMode";

function SchoolApp() {
    const articleCards = data.articleCards;
    const adaptiveDisignMode = useAdaptiveDesignMode();

    return (
        <React.Fragment>
            <Navigation.NavigationCombine
                adaptiveDisignMode={adaptiveDisignMode.mode}
            />
            {/* <Main/>
            <Menu/> */}
            <div className="container">
                <ArticleCardList articleCards={articleCards}></ArticleCardList>
            </div>
        </React.Fragment>
    );
}

export default SchoolApp;
