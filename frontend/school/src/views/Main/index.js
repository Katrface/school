import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import staticRouter from "../../router";
import AdaptiveDesign from "../../services/adaptiveDisign";
import News from "./News";
import newsServices from "../../services/news";

const Main = (props) => {
    const adaptiveDesignMode = props.adaptiveDesignMode;

    function getComponent() {
        if (adaptiveDesignMode === AdaptiveDesign.MOBILE) return <Redirect to={staticRouter.news.path}/>;
    }

    const redirectMainInMobile = getComponent();
    const newsCards = newsServices.getArticleCards();

    return (
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
                <div>Events</div>
                {/*<Events></Events>*/}
            </Route>
            <Route exact path={staticRouter.about.path}>
                <div>About</div>
                {/*<About></About>*/}
            </Route>
            <Redirect push to={staticRouter.main.path}/>
        </Switch>
    )
}


export default Main;