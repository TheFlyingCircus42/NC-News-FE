import {useState ,} from 'react'
import '../styles/Comment-Form.css'
import postComment from '../api-fetchers/PostComment'


function CommentForm ({article, setComments}) 
{
    const [userComment , setUserComment] = useState("")
    const [isPosting , setIsPosting] = useState(false)
    const [error , setError] = useState(null)
    //// HARD CODED USER NAME BELOW ///
    const currentUser = "tickle122"

    async function handleSubmit () 
    {
        if(!userComment.trim()) return

        setIsPosting(true)
        setError(null)
        const commentText = userComment

        const tempComment = {
            comment_id: Date.now,
            author: currentUser,
            body: userComment,
            created_at: new Date().toISOString(),
            votes:0,
            optimistic: true
        }

        setComments((curr)=>[tempComment, ...curr])

        try
            {
                const newComment = 
                await postComment(
                        article.article_id,
                        userComment, 
                        currentUser)

                setComments((curr)=>
                curr.map((c)=>
                    c.comment_id === tempComment.comment_id
                    ? newComment.comment
                    : c
                ))

                setUserComment("")

            }
            catch (err)
                {
                   setComments((curr)=>
                    curr.filter((c)=> c.comment_id !== tempComment.comment_id))
                    
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