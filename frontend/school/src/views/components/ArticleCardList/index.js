import ArticleCardList from "./ArticleCardList";

export default ArticleCardList;

function callbackWrapper(callback, asyncFunction) {
    return async (...args) => {
        asyncFunction(...args)
            .then((data) => callback(data));
    }
}