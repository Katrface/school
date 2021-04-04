import styles from "./styles.css";

const Link = (props) => {
    const linkObj = props.link;

    return (
        <a href={linkObj.link}>
            {linkObj.name}
        </a>
    );
};

export default Link;
