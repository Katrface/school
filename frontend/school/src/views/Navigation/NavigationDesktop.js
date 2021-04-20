import styles from "./stylesDesktop.css";
import TextLink from "../components/TextLink";
import container from "../config/container.css";

const NavigationDesktop = (props) => {
    const links = props.nav.links;

    const navLinks = links.map((linkObj) => {
        return <TextLink key={linkObj.name} link={linkObj} />;
    });

    return (
        <header className="container">
            <div className="logo">школа 27</div>
            <div className="header__nav">
                <nav className="navigation">{navLinks}</nav>
            </div>
        </header>
    );
};

export default NavigationDesktop;
