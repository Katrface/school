import React from "react";

import AdaptiveDesign from "../../../services/adaptiveDisign";

const DesktopLazy = React.lazy(() => import("./NewsDesktop"));
const MobileLazy = React.lazy(() => import("./NewsMobile"));

const News = (props) => {
    const adaptiveDesignMode = props.adaptiveDesignMode;

    function getComponent() {
        if (adaptiveDesignMode === AdaptiveDesign.DESKTOP) return DesktopLazy;
        if (adaptiveDesignMode === AdaptiveDesign.MOBILE) return MobileLazy;
    }
    const NewsComponent = getComponent();


    return (
        <React.Suspense fallback={<div/>}>
            <NewsComponent {...props}/>
        </React.Suspense>
    );
};

export default News;