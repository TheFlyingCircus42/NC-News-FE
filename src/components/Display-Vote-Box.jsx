
import { useState , useEffect } from "react"
import patchArticleVotes from "../api-fetchers/patchArticleVotes"
import '../styles/Voter.css'

function VoterBox ({article}) 
{
    const [voteCount , setVoteCount] = useState(article.votes)
    const [isVoting , setIsVoting] = useState(false)
    const [hasVoted , setHasVoted] = useState(false)
    const [error , setError] = useState(null)

    useEffect(()=>
        {
            setVoteCount(article.votes)
        } , [article.votes]) 

    async function handleVote(change)
    {
        if (isVoting || hasVoted) return
        setError(null)
        setIsVoting(true)
        setVoteCount((currentVotes) => currentVotes + change)

        try 
            {
                await patchArticleVotes(article.article_id , change)
                setHasVoted(true)
            } 
            catch (err) 
                {
                    setVoteCount((currentVotes)=> currentVotes - change)
                    setError("Failed to make a vote. Try Again")
                }
            finally 
                {
                    setIsVoting(false)
                }
    }

    return(

        <div className="vote-box">
            
            <button 
                className={`vote-btn ${hasVoted ? "voted" : ""}`}
                type="button" 
                disabled={isVoting || hasVoted} 
                onClick={()=>handleVote(+1)}>
                ⬆️  
            </button>
            
            <span className="vote-count">
                {voteCount} 
            </span>
            
            <button 
                className={`vote-btn ${hasVoted ? "voted" : ""}`}
                type="button" 
                disabled={isVoting || hasVoted} 
                onClick={()=>handleVote(-1)}>  
                ⬇️  
            </button>

            {error && <p className="vote-error">{error}</p>}

        </div>
    )
}

export default VoterBox 
