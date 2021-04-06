import styles from "./styles.css";
import {Link} from "react-router-dom";

const ArticleCard = (props) => {
    const articleCard = props.articleCard;

    return (
        <div className="article-card">
            <Link to={articleCard.link}>
                <img className="article-card__img" src={articleCard.imgLink} />
                <div className="article-card__dark"></div>
                <div className="article-card__title">{articleCard.title}</div>
            </Link>
        </div>
    );
};

export default ArticleCard;
