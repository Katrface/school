import styles from "./styles.css";

const ArticleCard = (props) => {
    const articleCard = props.articleCard;

    return (
        <div className="article-card">
            <a href={articleCard.link}>
                <img className="article-card__img" src={articleCard.imgLink} />
                <div className="article-card__dark"></div>
                <div className="article-card__title">{articleCard.title}</div>
            </a>
        </div>
    );
};

export default ArticleCard;
