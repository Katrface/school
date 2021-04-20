import React from "react";

import AdaptiveDesign from "../../../services/adaptiveDisign";

const DesktopLazy = React.lazy(() => import("./HiddenMenuDesktop"));
const MobileLazy = React.lazy(() => import("./HiddenMenuMobile"));

const HiddenMenu = (props) => {
    const adaptiveDesignMode = props.adaptiveDisignMode;

    function getComponent() {
        if (adaptiveDesignMode === AdaptiveDesign.DESKTOP) return DesktopLazy;
        if (adaptiveDesignMode === AdaptiveDesign.MOBILE) return MobileLazy;
    }

    const MenuComponent = getComponent();

    return (
        <React.Suspense fallback={<div/>}>
            <MenuComponent {...props}/>
        </React.Suspense>
    );
};

export default HiddenMenu;
