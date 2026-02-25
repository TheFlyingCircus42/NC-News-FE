import '../styles/Article-Cards.css' /// MAKE OWN CSS FILE

function ArticleByIDCard ({article})
{
     return(
    <div className="article-card">

        <h4 className="article-card-topic">{(article.topic).toUpperCase()}</h4>
        
        <h3 className="article-card-title">{article.title}</h3>

        <div className="article-card-content">

            <img className="article-card-img" src = {article.article_img_url} alt={article.title}/>

            <p className="article-card-text">{article.body}</p>
        </div>

        <div className="article-card-footer">

            <p className="article-card-footer-content"> By {article.author} | {new Date(article.created_at).toLocaleDateString()} | Comments: {article.comment_count} | Votes: {article.votes} </p>
        </div>
        
   
    </div>)

}

export default ArticleByIDCard