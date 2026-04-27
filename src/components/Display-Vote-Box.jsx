
import { useState , useEffect } from "react"
import patchArticleVotes from "../api-fetchers/patchArticleVotes"
import '../styles/Voter.css'

function VoterBox ({article}) 
{
    const [voteCount , setVoteCount] = useState(article.votes)
    const [isVoting , setIsVoting] = useState(false)
    // const [hasVoted , setHasVoted] = useState(false)
    const [userVote, setUserVote] = useState(0)
    const [error , setError] = useState(null)

    useEffect(()=>
        {
            setVoteCount(article.votes)
        } , [article.votes]) 

    async function handleVote(newVote)
    {
        if (isVoting) return
        setError(null)
        setIsVoting(true)

        const change = newVote - userVote
        setVoteCount((curr) => curr + change)
        setUserVote(newVote)

        try 
            {
                await patchArticleVotes(article.article_id , change)
            } 
            catch (err) 
                {
                    setVoteCount((curr)=> curr - change)
                    setUserVote(userVote)
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
                className={`vote-btn ${userVote === 1 ? "up" : ""}`}
                type="button" 
                disabled={isVoting} 
                onClick={()=>handleVote(userVote === 1 ? 0 : 1)}>
                ⬆️  
            </button>
            
            <span className="vote-count">
                {voteCount} 
            </span>
            
            <button 
                className={`vote-btn ${userVote === -1 ? "down" : ""}`}
                type="button" 
                disabled={isVoting} 
                onClick={()=>handleVote(userVote === -1 ? 0 : -1)}>  
                ⬇️  
            </button>

            {error && <p className="vote-error">{error}</p>}

        </div>
    )
}

export default VoterBox 
