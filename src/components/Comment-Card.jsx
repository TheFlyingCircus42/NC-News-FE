
function CommentCard ({comment}) 
{return(
    <div className="comment-card">

        <div className="comment-card-top">
            <p>Image</p>
            <p>{comment.author}</p>
            <p>{new Date(comment.created_at).toLocaleDateString()}</p>
            <p>Votes: {comment.votes}</p>

        </div>

        <div className="comment-card-content">
            <p>{comment.body}</p>
        </div>

        <div className="comment-card-footer">
            <p> | PATCH | </p>
            <p> | DELETE | </p>
        </div>



    </div>

)}

export default CommentCard