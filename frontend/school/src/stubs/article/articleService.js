import articlesDate from "./articlesDate";

const db = Object.create(null);

db['stub'] = articlesDate.stub;
db['subject-area'] = articlesDate.subjectArea;
db['purpose'] = articlesDate.purpose;
db['web-application-architecture'] = articlesDate.webApplicationArchitecture;
db['gui'] = articlesDate.gui;
db['tools'] = articlesDate.tools;
db['development-stages'] = articlesDate.developmentStages;
db['development-iterations'] = articlesDate.developmentIterations;
db['first-iter-description'] = articlesDate.firstIterDescription;
db['summary'] = articlesDate.summary;


const getArticleByLink = (link) => {
    return db[link];
}

export default {
    getArticleByLink
}