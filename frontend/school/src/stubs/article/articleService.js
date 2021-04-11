import articlesDate from "./articlesDate";

const db = Object.create(null);

db['subject-area'] = articlesDate.subjectArea;
db['purpose'] = articlesDate.purpose

const getArticleByLink = (link) => {
    return db[link];
}

export default {
    getArticleByLink
}