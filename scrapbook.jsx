//    <li><h3>POST: '/api/articles/:article_id/comments'</h3>
//                 <p> Will post a new comment to an existing article, by article id no and return it if succesful.</p>
// //                 <h4> Exapmle input </h4>
// //                 <pre><code></code>

// {
//   "username": "tickle122",
//   "body": "This is a test comment IS THIS THIG ON?!"
// }



//  <button className='Randomn-Btn' type='button'  onClick={()=> fetchPokemon(Math.floor(Math.random()* 1025)+1)}> Random </button> 


// // /// comments for one article //////////////////////////////
// // <li><h3>GET: '/api/articles/:article_id/comments'</h3>

// // <p>Will fetch all comments related to a particular article id</p>
// //   <h4>Example Result</h4>
// //   <p>Note: Result will contain multiple coment objects if there are multiple matches.</p>
// //   <pre><code>
// // {
// // 	"comments": [
// // 		{
// // 			"comment_id": 3,
// // 			"article_id": 3,
// // 			"body": "Qui sunt sit voluptas repellendus sed. Voluptatem et repellat fugiat. Rerum doloribus eveniet quidem vero aut sint officiis. Dolor facere et et architecto vero qui et perferendis dolorem. Magni quis ratione adipisci error assumenda ut. Id rerum eos facere sit nihil ipsam officia aspernatur odio.",
// // 			"votes": 3,
// // 			"author": "grumpy19",
// // 			"created_at": "2020-09-22T23:18:00.000Z"
// // 		},


// // // LINK //////////////////////////////</code>
// // <link rel="icon" href="favicon.ico" />

// // <nav>
// //   <Link to="/">Home</Link>
// //   <Link to="/about">About</Link>
// //   <Link to="/animals">Animals</Link>
// // </nav>


// // //A Link component can take any number of children:

// // <ul>
// //   <li>
// //     <Link to="/animals/bear">
// //       <h2>Bears</h2>
// //       <img src="http://example.com/bear.jpg" alt="bear in the forest" />
// //       <p>Tagline about bears</p>
// //     </Link>
// //   </li>
// // </ul>

// // // DATE FORMATTER
// // {new Date(article.created_at).toLocaleDateString()}



// // // src/components/SingleAnimal.jsx
// // import { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import { fetchAnimalBySpecies } from "../utils/api";

// // const SingleAnimal = () => {
// //   const [animal, setAnimal] = useState({});
// //   const { species_name } = useParams();

// //   useEffect(() => 
// //     {
// //     fetchAnimalBySpecies(species_name)
// //     .then((animalData) => {
// //       setAnimal(animalData);
// //     });
// //   }, [species_name]);

// //   return (
// //     <div>
// //       <h2>Rendering info about {species_name}</h2>
// //       // more data rendered here...
// //     </div>
// //   );
// // };




















// // // src/components/SingleAnimal.jsx
// // import { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import { fetchAnimalBySpecies } from "../utils/api";

// // const SingleAnimal = () => {
// //   const [animal, setAnimal] = useState({});
// //   const { species_name } = useParams();

// //   useEffect(() => {
// //     fetchAnimalBySpecies(species_name).then((animalData) => {
// //       setAnimal(animalData);
// //     });
// //   }, [species_name]);

// //   return (
// //     <div>
// //       <h2>Rendering info about {species_name}</h2>
// //       // more data rendered here...
// //     </div>
// //   );
// // };



// // // async function fetchAllArticles () {
// // //     const response = await fetch('https://nc-news-backend-wbzi.onrender.com/api/articles');

// // //     //console.log(response)
    
// // //     if(!response.ok) throw new Error("Cannot find articles list");

// // //     const allArticles = await response.json()
// // //     console.log("From Fetch All Articles.js", allArticles)
// // //     return allArticles
    
// // // }


// // // console.log(fetchAllArticles())



// // //     // async function fetchPokemon(name)
// // //     // {
// // //     //     try 
// // //     //     {
// // //     //         {
// // //     //             const data = await getPokemonByName(String(name).toLowerCase())
// // //     //             setPokemon(data.name)
// // //     //             setPokemonNumber(data.id)
// // //     //             setPokemonPic(data.sprites.other["official-artwork"].front_default)

// // //     //             const types = data.types.map( type => type.type.name)
// // //     //             setPokemonType(types.join(", "))
// // //     //         }
// // //     //     } 
// // //     //     catch (error) 
// // //     //     {
// // //     //         setPokemon("Not Found")
// // //     //         setPokemonNumber("???")
// // //     //         setPokemonPic("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png")
// // //     //         setPokemonType("???")
// // //     //         console.log(error)
// // //     //     }     
// // //     // }  