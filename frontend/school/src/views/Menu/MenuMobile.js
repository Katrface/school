import styles from "./stylesMobile.css";
import icons from "../config/icons/icons.css";
import MobileHead from "../components/MobileHead";

//TODO скролинг при большом количестве ссылок (фиксированное название школы) + всплытие события

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
                <MobileHead title="школа 27"/>
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