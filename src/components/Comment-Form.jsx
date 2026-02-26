import {useState ,} from 'react'
import '../styles/Comment-Form.css'
import postComment from '../api-fetchers/PostComment'


function CommentForm ({article}) 
{
    const [userComment , setUserComment] = useState("")
    const [isPosting , setIsPosting] = useState(false)
    const [error , setError] = useState(null)

    const currentUser = "tickle122"



    async function handleSubmit () 
    {
        if(!userComment.trim()) return

        setIsPosting(true)
        setError(null)

        try
            
            {
               
                const newComment = await postComment(article.article_id, userComment, currentUser)
                // onCommentPosted(newComment)
            }
                catch (err)
                {
                    setError("Failed to Post Comment")
                }
                finally 
                {
                    setIsPosting(false)
                }
    }
    

    return(
        <div className="comment-box-container">
            
            <div className="comment-box-header">
                <p>img</p>
                <p>username</p>
                <button className='cmnt-form-close-btn'>  X  </button>
            </div>

            <div className='comment-form'>
                <textarea rows="6" cols="50" value={userComment} onChange={(e) => setUserComment(e.target.value)} disabled={isPosting}></textarea>
            </div>

            <div className='comment-form-menu'>
                <div className='cmnt-form-menu-spacer'></div>
                <button className='cmnt-form-post-btn' onClick={handleSubmit} disabled={isPosting}> | POST |</button>
                
            </div>

            {error && <p className="cmnt-post-err">{error}</p>}

        </div>
    )
}

export default CommentForm