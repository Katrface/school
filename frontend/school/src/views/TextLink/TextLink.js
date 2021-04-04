import styles from "./styles.css";

const Link = (props) => {
    const linkObj = props.link;

    return (
        <a className="link" href={linkObj.link}>
            {linkObj.name}
        </a>
    );
};

export default Link;
