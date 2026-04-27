/// THIS FILE IS REDUNDANT
/// ARTICLE BY ID CARD IS NOW CALLED DIRECTLY TO ARTICLE BY ID JSX

/// THIS FILE CAN BE DELETED

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