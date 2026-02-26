
async function postComment (id , comment , username) 
{
    const response = await fetch
        (`https://nc-news-backend-wbzi.onrender.com/api/articles/${id}/comments` ,
            {
                method: "POST" ,
                headers: { "Content-Type" : "application/json" } ,
                body: JSON.stringify(
                    {
                        username: username,
                        body: comment
                    })
            }
        )

    if(!response.ok)
        {
            throw new Error("Failed to post comment")
        }

    const data = await response.json()
    return data
}

export default postComment