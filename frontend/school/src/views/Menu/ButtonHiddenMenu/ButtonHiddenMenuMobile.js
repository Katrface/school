import React from "react";


//bad component
const ButtonHiddenMenuMobile = (props) => {
    const changeMenuViewMode = props.changeMenuViewMode;

    return (
        <button onClick={changeMenuViewMode}>
            <i className="icon icon-menu bottom-menu__icon"></i>
        </button>
    );
};

export default ButtonHiddenMenuMobile;