import styles from "./styles.css"

const MobileHead = (props) => {

    return (
        <div className="mobile-head">
            <div className="mobile-head__title">{props.title}</div>
        </div>);
}

export default MobileHead;