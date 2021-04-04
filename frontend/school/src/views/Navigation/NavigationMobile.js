import styles from "./stylesMobile.css";
import icons from "../config/icons/icons.css";

const NavigationMobile = (props) => {
    const links = props.links;

    const bottomMenuCells = links.map((linkObj) => {
        const className = `icon ${linkObj.iconClass} bottom-menu__icon`;
        return (
            <div key={linkObj.title} className="bottom-menu__cell">
                <a href={linkObj.link}>
                    <i className={className}></i>
                </a>
            </div>
        );
    });

    return (
        <nav className="bottom-menu bottom-menu__fixed">{bottomMenuCells}</nav>
    );
};

export default NavigationMobile;
