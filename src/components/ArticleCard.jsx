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


    // const id = article.article_id

    return(
    <div className="article-card">
        
        <Link to={`/api/articles/${article_id}`}><h3 className="article-card-title">{title}</h3></Link>

        <div className="article-card-content">

            <img className="article-card-img" src = {article_img_url} alt={title}/>
            <p className="article-card-text">A bunch of place holder text, probably just the first few lines of the article body but I need to go into the backend to change that</p>
        </div>

        <div className="article-card-footer">

            <p className="article-card-footer-content"> By {author} | Comments: {comment_count} | Votes: {votes} </p>
        </div>
        
      
    </div>)

}

export default ArticleCard