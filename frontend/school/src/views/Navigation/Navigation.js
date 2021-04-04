import React from "react";

import AdaptiveDesign from "../../service/adaptiveDisign";
import TextLink from "../TextLink";

const DesktopLazy = React.lazy(() => import("./NavigationDesktop"));
const MobileLazy = React.lazy(() => import("./NavigationMobile"));

const Navigation = (props) => {
    const adaptiveDisignMode = props.adaptiveDisignMode;
    const navLinks = [
        { name: "Новости", link: "/news", iconClass: "icon icon-feed" },
        {
            name: "События",
            link: "/events",
            iconClass: "icon icon-notification"
        },
        {
            name: "О школе",
            link: "/about",
            iconClass: "icon icon-feed_active"
        }
    ];

    function getComponent() {
        if (adaptiveDisignMode === AdaptiveDesign.DESKTOP) return DesktopLazy;
        if (adaptiveDisignMode === AdaptiveDesign.MOBILE) return MobileLazy;
    }

    const NavigationComponent = getComponent();

    return (
        <React.Suspense fallback={<div>Loading</div>}>
            <NavigationComponent links={navLinks} />
        </React.Suspense>
    );
};

export default Navigation;
