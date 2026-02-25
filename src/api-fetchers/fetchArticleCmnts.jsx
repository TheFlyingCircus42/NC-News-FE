async function fetchCommentByArticleID (id)
{

    console.log(id , "fetch article comments")
    const response = await fetch(`https://nc-news-backend-wbzi.onrender.com/api/articles/${id}/comments`);

    if(!response.ok) throw new Error ("Can not load comments");

    const comments = await response.json()
    console.log(comments , "comment article fetcher 2")
    return comments
}

export default fetchCommentByArticleID