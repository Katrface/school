import styles from "./stylesDesktop.css";
import ArticleCardList from "../../components/ArticleCardList";

const NewsDesktop = (props) => {
    const newsCards = props.newsCards;

    return (
        <div className="container">
            <ArticleCardList articleCards={newsCards}/>
        </div>
    );
};

export default NewsDesktop;