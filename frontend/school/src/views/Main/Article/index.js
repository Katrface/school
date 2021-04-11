import React from "react";
import ArticleMarkdown from "./ArticleMarkdown";
import {useParams} from "react-router-dom";

import newsServices from "../../../services/article";

const ArticleRoute = (props) => {
    const { id } = useParams();
    const content = newsServices.getArticleContentByLinkName(id);

    return (
        <ArticleMarkdown content={content}/>
    );
}

export default {
    ArticleRoute
}