import styles from "./stylesMobile.css";
import icons from "../config/icons/icons.css";
import TextLink from "../components/TextLink/TextLink";

const MenuMobile = (props) => {
    const links = props.links;

    const menuLinkList = links.map((linkObj) => {
        return (
            <li key={linkObj.name}>
                <a href={linkObj.link}>
                    <div className="m-menu__row">
                        {linkObj.name}
                    </div>
                </a>
            </li>

        );
    });

    return (
        <div className="m-menu">
            <div className="m-menu__head">
                <div className="m-menu__logo">школа 27</div>
                <div className="m-menu__eye"><i className="icon icon-eye m-menu__icon"></i></div>
            </div>
            <ul>
                {menuLinkList}
            </ul>
            <div className="m-menu__school-name">Муниципальное бюджетное общеобразовательное учреждение
                "Средняя общеобразовательная школа № 27" г. Озерск Челябинской области
            </div>
        </div>
    );
};

export default MenuMobile;