import '../styles/Comment-Card.css' 
import { useState } from 'react'
import deleteCommentById  from '../api-fetchers/deleteCommentById'

import VoterBox from './Display-Vote-Box'
import patchCommentVotes from '../api-fetchers/patchCommentVotes'

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

        <div className={`comment-card 
            ${comment.optimistic ? "optimistic" : ""}
            ${isDeleteing ? "deleting" : ""}`
            }>
 
            <div className='comment-header'>
                <div className='comment-user'>
                    <div className='comment-avatar'> 👤 </div>
                    <span className='comment-author'> {comment.author} </span>
                </div>
            </div>

            <div className='comment-body'>
                {comment.body}
                <span className='comment-date'>
                    {new Date(comment.created_at).toLocaleDateString()}
                </span>
            </div>

            <div className='comment-actions'>

                
                <div className='comment-voter-wrapper'>
                    <VoterBox 
                    itemId={comment.comment_id}
                    votes={comment.votes}
                    patchVotes={patchCommentVotes}>
                </VoterBox> </div>

                {userIsAuthor && <button 
                    className="cmnt-card-dlt-btn" 
                    type="button" 
                    onClick={()=>handleDelete(currCmntID , cmntAuthor , currentUser)}>
                    {isDeleteing ? "Deleting..." : "Delete"}
                </button>}

            </div>


            <div >
                {isDeleteing && <p className='dlt-cmnt-err-msg'>Deleting comment</p>}
                {error && <p className='dlt-cmnt-err-msg'>{error}</p>}
            </div>

    </div>

)}

export default CommentCard