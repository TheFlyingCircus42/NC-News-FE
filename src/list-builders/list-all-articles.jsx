

import ArticleCard from '../components/ArticleCard'

function ListAllArticles ({ articles})
{
    return(
        <div className="articles-grid">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article}/>
            ))}
        </div>
    )
}

export default ListAllArticles