import articleStyles from '../styles/Article.module.css'
import ArticleItems from "./ArticleItems";

function ArticleList({articles}) {
    return (
        <div className={articleStyles.grid}>
            {articles.map(article => <ArticleItems article={article} /> )}
        </div>
    );
}

export default ArticleList;