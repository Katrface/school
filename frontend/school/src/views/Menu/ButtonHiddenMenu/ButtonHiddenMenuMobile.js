import React from "react";


//bad component
const ButtonHiddenMenuMobile = (props) => {
    const menuViewMode = props.menuViewMode;
    const classIcon = menuViewMode.isOpen ? "icon-menu_active" : "icon-menu";
    return (
        <button onClick={menuViewMode.changeMode}>
            <i className={`icon ${classIcon} bottom-menu__icon`}></i>
        </button>
    );
};

export default ButtonHiddenMenuMobile;