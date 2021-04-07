import { Remarkable } from 'remarkable';
import styles from "./markdownGitHubStyles.css"

const ArticleMarkdown = (props) => {
    const md = new Remarkable();

    const markdownContent = props.content;

    const getRawMarkup = () => {
        return { __html: md.render(markdownContent) };
    }

    return (
        <article className="markdown-body" dangerouslySetInnerHTML={getRawMarkup()}/>
    )

}

export default ArticleMarkdown