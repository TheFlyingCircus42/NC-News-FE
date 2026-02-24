/// ARTICLE PREVIEW CARD COMPONENT --> ArticleCard.jsx

function ArticleCard ({ article })
{
    return(
    <div className="article-card">
        
        <h3>{article.title}</h3>

        <div className="article-card-content">

            <img className="article-card-img" src = {article.article_img_url} alt={article.title}/>
            <p>A bunch of place holder text, probably just the first few lines of the article body but I need to go into the backend to change that</p>
        </div>

        <div className="article-card-footer">

            <p> By {article.author} | Comments: {article.comment_count} | Votes: {article.votes} </p>
        </div>
        
      
    </div>)

}

export default ArticleCard