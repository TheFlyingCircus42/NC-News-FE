/// ARTICLE PREVIEW CARD COMPONENT --> ArticleCard.jsx

function ArticleCard ({ article })
{
    return(
    <div className="article-card">
        
        <h3 className="article-card-title">{article.title}</h3>

        <div className="article-card-content">

            <img className="article-card-img" src = {article.article_img_url} alt={article.title}/>
            <p className="article-card-text">A bunch of place holder text, probably just the first few lines of the article body but I need to go into the backend to change that</p>
        </div>

        <div className="article-card-footer">

            <p classname="article-card-footer-content"> By {article.author} | Comments: {article.comment_count} | Votes: {article.votes} </p>
        </div>
        
      
    </div>)

}

export default ArticleCard