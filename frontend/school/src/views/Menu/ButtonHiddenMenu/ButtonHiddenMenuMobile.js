import React from "react";


//bad component
const ButtonHiddenMenuMobile = (props) => {
    const menuViewMode = props.menuViewMode;
    const classActive = menuViewMode.isOpen ? "active" : "";
    return (
        <button className={classActive} onClick={menuViewMode.changeMode}>
            <i className={`icon icon-menu bottom-menu__icon`}></i>
        </button>
    );
};

export default ButtonHiddenMenuMobile;