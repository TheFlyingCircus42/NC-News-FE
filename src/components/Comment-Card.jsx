import '../styles/Comment-Card.css' 
import { useState } from 'react'
import deleteCommentById  from '../api-fetchers/deleteCommentById'


function CommentCard ({comment,setComments}) 
{
    const [isDeleteing , setIsDeleting]= useState(false)
    const [error , setError] = useState(null)

    const currentUser = "tickle122" /// HC USER
    const currCmntID = comment.comment_id
    const cmntAuthor = comment.author
    const userIsAuthor = (comment.author === currentUser)
    

    async function handleDelete (comment_id , cmnt_author , currentUser) 
    {
        if(!userIsAuthor || isDeleteing) return
        {
            setIsDeleting(true)
            
            try 
                {
                    await deleteCommentById(comment_id)
                    setComments((curr)=>
                        curr.filter((c)=> c.comment_id !== comment_id))
                        alert("Your comment has been deleted!")
                }            
                catch (err) 
                {
                    setError("Failed to delete comment - please try again")
                }
                finally
                {
                    setIsDeleting(false)
                }
        }           

    }

    return(
    // <div className="comment-card">
        <div className={`comment-card 
            ${comment.optimistic ? "optimistic" : ""}
            ${isDeleteing ? "deleting" : ""}`
            }>
        <div className="comment-card-top">
            <p>Image</p>
            <p>{comment.author}</p>
            <p>{new Date(comment.created_at).toLocaleDateString()}</p>
            <p>Votes: {comment.votes}</p>
            <p>CMNT ID: {comment.comment_id}</p>

        </div>

        <div className="comment-card-content">
            <p>{comment.body}</p>
        </div>

        <div className="comment-card-footer">
            
            {userIsAuthor && <button className="cmnt-card-dlt-btn" type="button" onClick={()=>handleDelete(currCmntID , cmntAuthor , currentUser)}> | DELETE | </button>}
           
            <div >
                {isDeleteing && <p className='dlt-cmnt-err-msg'>Deleting comment</p>}
                {error && <p className='dlt-cmnt-err-msg'>{error}</p>}
            </div>

            <p> |  + VOTE  | </p>
            <p> |  - VOTE  | </p>
        </div>



    </div>

)}

export default CommentCard