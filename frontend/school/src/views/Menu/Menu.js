import React from "react";

import AdaptiveDesign from "../../services/adaptiveDisign";

const DesktopLazy = React.lazy(() => import("./MenuDesktop"));
const MobileLazy = React.lazy(() => import("./MenuMobile"));

const Menu = (props) => {
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

export default Menu;
