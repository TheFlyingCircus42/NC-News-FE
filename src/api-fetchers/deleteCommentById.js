
async function deleteCommentById(comment_id) 
{
    const response = await fetch 
    (`https://nc-news-backend-wbzi.onrender.com/api/comments/${comment_id}` ,
        {
            method: "DELETE" ,
            // headers: {"Content-Type" : "application/json" , } ,
            // body: JSON.stringify({}) 
        }
    )

    if (!response.ok)
        {
            throw new Error("Failed to delete comment")
        }

    // const data = await response.json()
    // return data
    return


}

export default deleteCommentById

// .delete('/api/comments/1')
// be available on /api/comments/:comment_id.