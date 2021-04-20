import React from "react";
import MenuMobile from "../MenuMobile";
import styles from "./stylesMobile.css";

const HiddenMenuMobile = (props) => {
    const isOpen = props.isOpen;
    const className = isOpen ? "active" : "";

    const stopPropagation = function(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    document.getElementById("hidden-menu")?.addEventListener("scroll",
            stopPropagation)

    return (
        <div id="hidden-menu" className={className}>
            <div className="scrolling">
                <MenuMobile {...props}/>
            </div>
        </div>
    );
};

export default HiddenMenuMobile;