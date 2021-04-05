import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import staticRouter from "../../router";
import AdaptiveDesign from "../../services/adaptiveDisign";

const Main = (props) => {
    const adaptiveDesignMode = props.adaptiveDisignMode;

    function getComponent() {
        if (adaptiveDesignMode === AdaptiveDesign.MOBILE) return <Redirect to={staticRouter.news.path}/>;
    }

    const redirectMainInMobile = getComponent();

    return (
        <Switch>
            <Route exact path={staticRouter.main.path}>
                {redirectMainInMobile}
                <div>Main</div>
                {/*<Main></Main>*/}
            </Route>
            <Route exact path={staticRouter.news.path}>
                <div>News</div>
                {/*<News></News>*/}
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