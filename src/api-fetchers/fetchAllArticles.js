
async function fetchAllArticles () {

    
    const response = await fetch('https://nc-news-backend-wbzi.onrender.com/api/articles');

        
    if(!response.ok) throw new Error("Cannot find articles list");

    const allArticles = await response.json()
    
    return allArticles
    
}

export default fetchAllArticles
