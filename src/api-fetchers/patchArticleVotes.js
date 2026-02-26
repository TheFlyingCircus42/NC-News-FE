
async function patchArticleVotes(id , voteChange) 
{
    const response = await fetch 
        (`https://nc-news-backend-wbzi.onrender.com/api/articles/${id}` ,
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

export default patchArticleVotes