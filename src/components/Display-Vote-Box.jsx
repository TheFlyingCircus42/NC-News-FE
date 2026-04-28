
import { useState , useEffect } from "react"
import patchArticleVotes from "../api-fetchers/patchArticleVotes"
import '../styles/Voter.css'

/// TAKES AN ITEM ID, VOTES (to change), FUNCTION (which api call)

function VoterBox ({itemId, votes, patchVotes}) 
{
    const [voteCount , setVoteCount] = useState(votes)
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

        const prevVote = userVote
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
                    setUserVote(prevVote)
                    setError("Failed to make a vote. Try Again")
                }
            finally 
                {
                    setIsVoting(false)
                    setTimeout(() => setAnimateVote(false), 150);
                }
    }

    return(<>

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

            

        </div>

        <div className="vote-error">
            {error && <span className="vote-error">Your vote change has not been counted.</span>}
        </div>
        
    </>)
}

export default VoterBox 
