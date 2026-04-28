
async function patchCommentVotes(id , voteChange) 
{
    const response = await fetch 
        (`https://nc-news-backend-wbzi.onrender.com/api/comments/${id}` ,
            {
                method: "PATCH" ,
                headers: { "Content-Type": "application/json", } ,
                body: JSON.stringify({inc_votes: voteChange}),                
            }
        )
    
    if (!response.ok) 
        {
            throw new Error("Failed to update vote")
        }

    const data = await response.json()
    return data
    
}

export default patchCommentVotes