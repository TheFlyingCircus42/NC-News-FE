import CommentCard from "../components/Comment-Card"

function ListCommentsByArticleID ({ comment }) 
{
    console.log(comment , "commennts lister")
    return(
        <div className="comment-grid">
            {comment.map((comment) => (
                <CommentCard key={comment.comment_id} comment={comment}/>
            ))}
        </div>
    )


}

export default ListCommentsByArticleID