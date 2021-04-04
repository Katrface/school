import styles from "./stylesDesktop.css";
import TextLink from "../components/TextLink";
import container from "../config/container.css";

const MenuDesktop = (props) => {
    const links = props.links;

    return (
        <footer className="container">
            <div className="separator"></div>
            <div className="school-name">Муниципальное бюджетное общеобразовательное учреждение
                "Средняя общеобразовательная школа № 27" г. Озерск Челябинской области
            </div>
            <MenuListDesktop links={links}/>

        </footer>
    );
};

export default MenuDesktop;


const MenuListDesktop = (props) => {
    const links = props.links;
    const menuLinks = links.map((linkObj) => {
        return (<li key={linkObj.name}><TextLink link={linkObj}/></li>);
    });
    return (
        <div className="menu">
            <ul>
                {menuLinks}
            </ul>
        </div>
    );
}