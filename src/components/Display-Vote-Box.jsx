
import { useState , useEffect } from "react"
import patchArticleVotes from "../api-fetchers/patchArticleVotes"

function VoterBox ({article}) 
{
    const [voteCount , setVoteCount] = useState(article.votes)
    const [isVoting , setIsVoting] = useState(false)
    const [hasVoted , setHasVoted] = useState(false)
    const [error , setError] = useState(null)

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

        <div className="article-voter-box">
            
            <button className="vote-minus-btn" type="button" disabled={isVoting} onClick={()=>handleVote(-1)}>  - VOTE  </button>
            
            <p>  Votes: {voteCount}  </p>
            
            <button className="vote-plus-btn" type="button" disabled={isVoting} onClick={()=>handleVote(+1)}>  + VOTE  </button>

            {error && <p className="vote-error">{error}</p>}

        </div>
    )
}

export default VoterBox 
