/// ARTICLE PREVIEW CARD COMPONENT --> ArticleCard.jsx

import '../styles/Article-Cards.css'
import { Link } from 'react-router-dom'

function ArticleCard ({ article })
{
    const id = article.article_id

    return(
    <div className="article-card">
        
        {/* <h3 className="article-card-title">{article.title}</h3> */}
        <Link to={`/api/articles/${id}`}><h3 className="article-card-title">{article.title}</h3></Link>

        <div className="article-card-content">

            <img className="article-card-img" src = {article.article_img_url} alt={article.title}/>
            <p className="article-card-text">A bunch of place holder text, probably just the first few lines of the article body but I need to go into the backend to change that</p>
        </div>

        <div className="article-card-footer">

            <p className="article-card-footer-content"> By {article.author} | Comments: {article.comment_count} | Votes: {article.votes} </p>
        </div>
        
      
    </div>)

}

export default ArticleCard