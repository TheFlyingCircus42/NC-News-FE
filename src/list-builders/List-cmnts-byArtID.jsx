import CommentCard from "../components/Comment-Card"

function ListCommentsByArticleID ({ comment, setComments }) 
{
    return(
        <div className="comment-list">
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