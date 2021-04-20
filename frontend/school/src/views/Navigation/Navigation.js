import React from "react";

import AdaptiveDesign from "../../services/adaptiveDisign";

const DesktopLazy = React.lazy(() => import("./NavigationDesktop"));
const MobileLazy = React.lazy(() => import("./NavigationMobile"));

const Navigation = (props) => {
    const adaptiveDesignMode = props.adaptiveDisignMode;

    function getComponent() {
        if (adaptiveDesignMode === AdaptiveDesign.DESKTOP) return DesktopLazy;
        if (adaptiveDesignMode === AdaptiveDesign.MOBILE) return MobileLazy;
    }

    const NavigationComponent = getComponent();

    return (
        <React.Suspense fallback={<div/>}>
            <NavigationComponent {...props} />
        </React.Suspense>
    );
};

export default Navigation;
