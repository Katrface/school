import React from "react";
import {Redirect, Route, Switch, useParams} from "react-router-dom";
import staticRouter from "../../router";
import AdaptiveDesign from "../../services/adaptiveDisign";
import News from "./News";
import newsServices from "../../services/news";
import eventService from "../../services/events";

import Article from "./Article";
import styles from "./styles.css";
import Events from "./Events/Events";

import ScrollToTop from "./ScrollToTop";

const Main = (props) => {
    const adaptiveDesignMode = props.adaptiveDesignMode;

    function getRedirectIfMobile() {
        // if (adaptiveDesignMode === AdaptiveDesign.MOBILE)
            return <Redirect to={staticRouter.news.path}/>;
    }

    //data
    const redirectMainInMobile = getRedirectIfMobile();
    const newsCards = newsServices.getNewsCards();
    const eventCards = eventService.getEventCards();

    function getMainClassNameByAdaptive(){
        if (adaptiveDesignMode === AdaptiveDesign.DESKTOP) return "main";
        if (adaptiveDesignMode === AdaptiveDesign.MOBILE) return "m-main";
    }

    const mainClassName = getMainClassNameByAdaptive();

    return (
        <div className={mainClassName}>
            <ScrollToTop/>

            <Switch>
                <Route exact path={staticRouter.main.path}>
                    {redirectMainInMobile}
                    <div>Main</div>
                    {/*<Main/>*/}
                </Route>
                <Route exact path={staticRouter.news.path}>
                    <News.NewsCombine adaptiveDesignMode={adaptiveDesignMode}
                                      newsCards={newsCards}/>
                </Route>
                <Route exact path={staticRouter.events.path}>
                    <Events eventCards={eventCards}/>
                </Route>
                <Route exact path={staticRouter.about.path}>
                    <div>About</div>
                    {/*<About></About>*/}
                </Route>

                <Route path={staticRouter.article.path}>
                    <Article.ArticleRoute/>
                    {/*<About></About>*/}
                </Route>

                <Redirect push to={staticRouter.main.path}/>
            </Switch>
        </div>
    )
}


export default Main;