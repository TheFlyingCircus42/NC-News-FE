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
                setUserComment("")
                alert("Your comment has been posted succesfully! - Press refresh to see it!")
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
                <div className='comment-user'>
                    <div className='comment-avatar'>👤</div>
                    <span className='comment-username'>tickle122</span>
                </div>

                <button className='cmnt-form-close-btn'>  X  </button>
            </div>

            <textarea className="comment-textarea"
                rows="5" 
                value={userComment} 
                onChange={(e) => setUserComment(e.target.value)} 
                disabled={isPosting}>
            </textarea>
    
            <div className='comment-actions'>
                <button
                    className="cmnt-form-post-btn"
                    onClick={handleSubmit} 
                    disabled={isPosting}>
                    Post comment...
                </button>
            </div>

            {error && <p className="cmnt-post-err">{error}</p>}
        </div>
    )
}

export default CommentForm