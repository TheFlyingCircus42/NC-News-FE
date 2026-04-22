/// ARTICLE PREVIEW CARD COMPONENT --> ArticleCard.jsx

import '../styles/Article-Cards.css'
import { Link } from 'react-router-dom'

function ArticleCard ({ article })
{
    
    if (!article) return null; 
    console.log(article)

    const {
        article_id,
        article_img_url,
        author,
        comment_count,
        created_at,
        title,
        topic,
        votes
    } = article;


    return(
    <div className="article-card">
        
        <Link to={`/api/articles/${article_id}`}><h3 className="article-card-title">{title}</h3></Link>

        <div className="article-card-content">
            {article_img_url && (
            <img className="article-card-img" 
                src = {article_img_url} 
                alt={title}/>
            )}

        </div>

        <div className="article-card-footer">

            <p className="article-card-footer-content"> 
                By {author || "unkown"} | Comments: {comment_count ?? 0} | Votes: {votes ?? 0} 
            </p>

        </div>
        
      
    </div>)

}

export default ArticleCard