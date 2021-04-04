import styles from "./styles.css";
import ArticleCard from "../ArticleCard";

const ArticleCardList = (props) => {
    const articleCards = props.articleCards;

    const articleCardList = articleCards.map((articleCard) => {
        return (
            <li key={articleCard.id}>
                <ArticleCard articleCard={articleCard} />
            </li>
        );
    });

    return (
        <div className="article-card-list">
            <ul>{articleCardList}</ul>
        </div>
    );
};

export default ArticleCardList;
