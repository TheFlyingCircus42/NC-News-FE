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
    <div className="article-card">
        
        <Link to={`/articles/${article_id}`} className='article-link'>
            <h3 className="article-card-title">{title}</h3>
        </Link>

        <p className='article-meta'>
            {topic} - {date}
        </p>

        <div className="article-card-content">
            {article_img_url && (
                <img className="article-card-img" 
                src = {article_img_url} 
                alt={title}/>)}
        </div>

        <div className="article-card-footer">
            <div className="article-card-footer-content"> 
                <span> By {author || "unkown"} </span>
                <span> Comments: {comment_count ?? 0} </span>
                <span> Votes: {votes ?? 0} </span>
            </div>
        </div>
        
    </div>);
}

export default ArticleCard