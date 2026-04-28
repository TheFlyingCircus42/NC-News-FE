import ListCommentsByArticleID from "../list-builders/List-cmnts-byArtID"

function CommentsByArticleID ({comments, setComments}) 
{
    if (!comments) return null;
    return(
        <ListCommentsByArticleID 
            comment={comments}
            setComments={setComments}
        />
    )
}

export default CommentsByArticleID