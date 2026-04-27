import ListCommentsByArticleID from "../list-builders/List-cmnts-byArtID"

function CommentsByArticleID ({comments}) 
{
    if (!comments) return null;
    return(
        <ListCommentsByArticleID comment={comments}/>
    )
}

export default CommentsByArticleID