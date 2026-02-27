import ArticlesByTopic from "./Articles-By-Topic"

function TopicsCooking () 
{

    const topic = "cooking"

    return(<>
    <h3>Cooking</h3>
    <p> Food just wouldn't be the same without it!</p>

        <ArticlesByTopic topic={topic}></ArticlesByTopic>

    </>)
}

export default TopicsCooking