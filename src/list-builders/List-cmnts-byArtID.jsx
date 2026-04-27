import CommentCard from "../components/Comment-Card"

function ListCommentsByArticleID ({ comment, setComments }) 
{
    console.log(comment , "commennts lister")
    return(
        <div className="comment-grid">
            {comment.map((comment) => (
                <CommentCard 
                    key={comment.comment_id} 
                    comment={comment}
                    setComments={setComments}
                />
            ))}
        </div>
    )


}

export default ListCommentsByArticleID