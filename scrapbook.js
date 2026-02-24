
// async function fetchAllArticles () {
//     const response = await fetch('https://nc-news-backend-wbzi.onrender.com/api/articles');

//     //console.log(response)
    
//     if(!response.ok) throw new Error("Cannot find articles list");

//     const allArticles = await response.json()
//     console.log("From Fetch All Articles.js", allArticles)
//     return allArticles
    
// }


// console.log(fetchAllArticles())



//     // async function fetchPokemon(name)
//     // {
//     //     try 
//     //     {
//     //         {
//     //             const data = await getPokemonByName(String(name).toLowerCase())
//     //             setPokemon(data.name)
//     //             setPokemonNumber(data.id)
//     //             setPokemonPic(data.sprites.other["official-artwork"].front_default)

//     //             const types = data.types.map( type => type.type.name)
//     //             setPokemonType(types.join(", "))
//     //         }
//     //     } 
//     //     catch (error) 
//     //     {
//     //         setPokemon("Not Found")
//     //         setPokemonNumber("???")
//     //         setPokemonPic("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png")
//     //         setPokemonType("???")
//     //         console.log(error)
//     //     }     
//     // }  