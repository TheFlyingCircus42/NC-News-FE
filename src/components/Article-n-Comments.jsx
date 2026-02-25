import ArticleByID from './ArticleByID'
import CommentsByArticleID from './Comments-For-Article'



function ArticleAndComments () 
{ return(
    <div className="Article-and-comments-grid">
        <ArticleByID></ArticleByID>
        <CommentsByArticleID></CommentsByArticleID>
    </div>
)
    
}


export default ArticleAndComments