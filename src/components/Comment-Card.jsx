import '../styles/Comment-Card.css' 
import { useState } from 'react'
import deleteCommentById  from '../api-fetchers/deleteCommentById'


function CommentCard ({comment}) 
{
    const [isDeleteing , setIsDeleting]= useState(false)
    const [error , setError] = useState(null)
    const [cmntDeleted , setCmntDeleted] = useState(false)


    const currentUser = "tickle122" /// HC USER
    const currCmntID = comment.comment_id
    const cmntAuthor = comment.author
    

    if(cmntDeleted) return null

    async function handleDelete (comment_id , cmnt_author , currentUser) 
    {
        if(cmnt_author === currentUser)
        {
            if(isDeleteing)return
            setError(null)
            setIsDeleting(true)
            setCmntDeleted(false)
            
                try 
                {
                    await deleteCommentById(comment_id)
                    setCmntDeleted(true)
                }            
                catch (err) 
                {
                    setError("Failed to delete comment - please try again later")
                }
                finally
                {
                    setIsDeleting(false)
                }
        }           

    }

    return(
    <div className="comment-card">

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
            
            <button className="cmnt-card-dlt-btn" type="button" onClick={()=>handleDelete(currCmntID , cmntAuthor , currentUser)}> | DELETE | </button>

            <p> | PATCH | </p>
            <p>       </p>
            <p> |  + VOTE  | </p>
            <p> |  - VOTE  | </p>
        </div>

        <div >
            {isDeleteing && <p className='dlt-cmnt-err-msg'>Attempting to delete your comment</p>}
            {error && <p className='dlt-cmnt-err-msg'>{error}</p>}
            {cmntDeleted && <p className='cmnt-dlt-success-msg'>Your message has been deleted - please refresh to confirm. </p>}
        </div>

    
        

    </div>

)}

export default CommentCard