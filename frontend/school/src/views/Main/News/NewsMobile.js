import styles from "./stylesMobile.css";
import containers from "../../config/container.css"
import ArticleCardList from "../../components/ArticleCardList";
import MobileHead from "../../components/MobileHead";

const NewsMobile = (props) => {
    const newsCards = props.newsCards;

    return (
        <div className="m-news">
            <MobileHead title="Новости"/>
            <div className="container">
                <ArticleCardList articleCards={newsCards}/>
            </div>
        </div>
    );
};

export default NewsMobile;


