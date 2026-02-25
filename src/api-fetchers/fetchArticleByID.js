// fetchArticleByID.js
// fetch an articl by an id no

async function fetchArticleByID (id){

    const response = await fetch(`https://nc-news-backend-wbzi.onrender.com/api/articles/${id}`);

    if(!response.ok) throw new Error("Cannot find articles list");

    const article = await response.json()
    
    return article
}

console.log("fetch by id" ,fetchArticleByID(2))

export default fetchArticleByID