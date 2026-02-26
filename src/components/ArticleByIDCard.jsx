import '../styles/Article-Cards.css' /// MAKE OWN CSS FILE
import './Display-Vote-Box'
import VoterBox from './Display-Vote-Box'


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

        <VoterBox article={article}></VoterBox>


        {/* <div className="article-voter-box">
            <button className="vote-btn" type="button">  - VOTE  </button>
            <p> | Votes: {article.votes} | </p>
            <button className="vote-btn" type="button">  + VOTE  </button>
        </div> */}

        <div className="article-card-footer">  
            <p className="article-card-footer-content"> By {article.author} | {new Date(article.created_at).toLocaleDateString()} | Comments: {article.comment_count}  </p>
        </div>
   
    </div>)

}

export default ArticleByIDCard