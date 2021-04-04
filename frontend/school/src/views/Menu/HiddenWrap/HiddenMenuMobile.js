import React from "react";
import MenuMobile from "../MenuMobile";
import styles from "./stylesMobile.css";

const HiddenMenuMobile = (props) => {
    const isOpen = props.isOpen;
    const className = isOpen ? "active" : "";
    return (
        <div id="hidden-menu" className={className}>
            <MenuMobile {...props}/>
        </div>
    );
};

export default HiddenMenuMobile;