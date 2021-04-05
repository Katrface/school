import styles from "./stylesMobile.css";
import icons from "../config/icons/icons.css";
import ButtonHiddenMenuMobile from "../Menu/ButtonHiddenMenu/ButtonHiddenMenuMobile";

const NavigationMobile = (props) => {
    const links = props.links;
    const menuViewMode = props.menuViewMode;

    const bottomMenuCells = links.map((linkObj) => {
        const className = `icon ${linkObj.iconClass} bottom-menu__icon`;
        return (
            <div key={linkObj.name} className="bottom-menu__cell">
                <a href={linkObj.link}>
                    <i className={className}></i>
                </a>
            </div>
        );
    });

    return (
        <nav className="bottom-menu bottom-menu__fixed">
            {bottomMenuCells}
            <div className="bottom-menu__cell">
                <ButtonHiddenMenuMobile menuViewMode={menuViewMode}/>
            </div>
        </nav>
    );
};

export default NavigationMobile;
