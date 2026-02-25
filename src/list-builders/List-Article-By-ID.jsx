// import ArticleCard from '../components/ArticleCard'

import ArticleByIDCard from "../components/ArticleByIDCard"

function ListArticleByID ({ article })
{
    return(
        <div className="article-grid">
            {article.map((article) => (
                <ArticleByIDCard key={article.article_id} article={article}/>
            ))}
        </div>
    )
}

export default ListArticleByID