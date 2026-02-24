
async function fetchAllArticles () {

    console.log("TEST TEST")
    const response = await fetch('https://nc-news-backend-wbzi.onrender.com/api/articles');

    //console.log(response)
    
    if(!response.ok) throw new Error("Cannot find articles list");

    const allArticles = await response.json()
    console.log("LINE 12 From Fetch All Articles.js", allArticles)
    return allArticles
    
}



export default fetchAllArticles
