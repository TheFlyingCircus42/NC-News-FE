
import { useState , useEffect } from "react"
import patchArticleVotes from "../api-fetchers/patchArticleVotes"
import '../styles/Voter.css'

/// TAKES AN ITEM ID, VOTES (to change), FUNCTION (which api call)

function VoterBox ({itemId, votes, patchVotes}) 
{
    const [voteCount , setVoteCount] = useState(article.votes)
    const [isVoting , setIsVoting] = useState(false)
    const [userVote, setUserVote] = useState(0)
    const [error , setError] = useState(null)
    const [animateVote, setAnimateVote] = useState(false)

    useEffect(()=>
        {
            setVoteCount(votes)
        } , [votes]) 

    async function handleVote(newVote)
    {
        if (isVoting) return
        setError(null)
        setIsVoting(true)

        const change = newVote - userVote
        setVoteCount((curr) => curr + change)
        setAnimateVote(true)
        setUserVote(newVote)

        try 
            {
                await patchVotes(itemId , change)
            } 
            catch (err) 
                {
                    setVoteCount((curr)=> curr - change)
                    setUserVote((curr)=> curr - change)
                    setError("Failed to make a vote. Try Again")
                }
            finally 
                {
                    setIsVoting(false)
                    setTimeout(() => setAnimateVote(false), 150);
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
            
            <span 
                className={`vote-count ${animateVote ? "pulse" : ""}`}>
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
