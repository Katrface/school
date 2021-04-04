import React from "react";

import AdaptiveDesign from "../../../services/adaptiveDisign";

const DesktopLazy = React.lazy(() => import("./ButtonHiddenMenuDesktop"));
const MobileLazy = React.lazy(() => import("./ButtonHiddenMenuMobile"));

const ButtonHiddenMenu = (props) => {
    const adaptiveDesignMode = props.adaptiveDisignMode;

    function getComponent() {
        if (adaptiveDesignMode === AdaptiveDesign.DESKTOP) return DesktopLazy;
        if (adaptiveDesignMode === AdaptiveDesign.MOBILE) return MobileLazy;
    }

    const MenuComponent = getComponent();

    return (
        <React.Suspense fallback={<div>Loading</div>}>
            <MenuComponent {...props}/>
        </React.Suspense>
    );
};

export default ButtonHiddenMenu;
