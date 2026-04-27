import '../styles/Article-By-ID.css'
import './Display-Vote-Box'
import VoterBox from './Display-Vote-Box'
import CommentForm from './Comment-Form'
import CommentsByArticleID from "./Comments-For-Article";


function ArticleByIDCard ({article})
{
    if (!article) return null;
    console.log("THIS ARTICLE", article)

        const {
        article_id,
        article_img_url,
        author,
        created_at,
        title,
        topic,
        body,
        votes
    } = article;

  return(
        <article className='article-page'>
      
            <header className='article-header'>
                {/* <p className='article-topic'>{topic?.toUpperCase()} </p> */}
                <h1 className='article-title'>{title}</h1>
            </header>

            <div className='article-meta'>
                {/* <p className='article-topic'>{topic?.toUpperCase()} </p> */}
                <span className='meta-item'>By {author}</span>
                <span className='meta-item'>{new Date(created_at).toLocaleDateString("en-GB")}</span>
                {/* <span className='meta-item'>💬 {article.comment_count}</span> */}
                {/* <span className='meta-item'>{article.votes}</span> */}
            </div>

            <img className='article-image'
                src={article_img_url}
                alt={title} />
            
            <section className="article-body">
                {body}
            </section>

            <VoterBox article={article}></VoterBox>
            <CommentForm article={article}></CommentForm>
            <CommentsByArticleID article={article}/>

        </article>
    )
}

export default ArticleByIDCard

