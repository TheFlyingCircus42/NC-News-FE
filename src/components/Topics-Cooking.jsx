import ArticlesByTopic from "./Articles-By-Topic"

function TopicsCooking () 
{

    const topic = "cooking"

    return(<>
        <div className="single-topic-container">
    <h3 className="section-title"> Cooking </h3>
    <p className="topic-description"> Food just wouldn't be the same without it </p>
     </div>


        <ArticlesByTopic topic={topic}></ArticlesByTopic>

    </>)
}

export default TopicsCooking