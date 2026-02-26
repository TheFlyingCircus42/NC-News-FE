

function VoterBox ({article}) 
{
    return(

    <div className="article-voter-box">
            <button className="vote-btn" type="button">  - VOTE  </button>
            <p> | Votes: {article.votes} | </p>
            <button className="vote-btn" type="button">  + VOTE  </button>
        </div>
    )
}

export default VoterBox 
