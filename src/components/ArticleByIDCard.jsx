import '../styles/Article-Cards.css' /// MAKE OWN CSS FILE
import './Display-Vote-Box'
import VoterBox from './Display-Vote-Box'
import CommentForm from './Comment-Form'


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
            <p className="article-card-footer-content"> By {article.author} | {new Date(article.created_at).toLocaleDateString()} | Comments: {article.comment_count}  </p>
        </div>

        <VoterBox article={article}></VoterBox>
        {/* <AddComment article={article}></AddComment> */}
        <CommentForm article={article}></CommentForm>




   
    </div>)

}

export default ArticleByIDCard