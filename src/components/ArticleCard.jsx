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

    const date = created_at
        ? new Date(created_at).toLocaleDateString("en-GB", 
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }) : "";

    return(

    <Link to={`/articles/${article_id}`} className='article-card-link'>
    <div className="article-card">
        
        <Link to={`/articles/${article_id}`} className='article-link'>
            <h3 className="article-card-title">{title}</h3>
        </Link>

        <p className='article-meta'>
            <span className='article-topic-badge'> {topic} </span> 
            <span>{date}</span>
        </p>

        <div className="article-card-content">
            {article_img_url && (
                <img className="article-card-img" 
                src = {article_img_url} 
                alt={title}/>)}
        </div>

        <div className="article-card-footer">

                <span className='footer-left'>
                    <span className='meta-item'>  👤 By {author || "unkown"}  </span>
                </span>
                
                <span className='footer-right'>
                    <span className='meta-item'>  💬 {comment_count ?? 0}  </span>
                    <span className='meta-item'>  ⬆️ {votes ?? 0}  </span>
                </span>
        </div>
        
    </div>
    </Link>);
}

export default ArticleCard