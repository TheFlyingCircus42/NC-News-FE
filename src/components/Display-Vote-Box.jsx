
import { useState , useEffect } from "react"

function VoterBox ({article}) 
{
    const [voteCount , setVoteCount] = useState(article.votes)

    function increaseVote () 
    {
        setVoteCount((currentVotes) => currentVotes + 1)
    }

    function decreaseVote()
    {
        setVoteCount((currentVotes) => currentVotes -1)
    }


    return(

    <div className="article-voter-box">
            
            <button className="vote-btn" type="button" onClick={decreaseVote}>  - VOTE  </button>
            
            <p>  Votes: {voteCount}  </p>
            
            <button className="vote-btn" type="button" onClick={increaseVote}>  + VOTE  </button>

        </div>
    )
}

export default VoterBox 
