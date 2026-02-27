import AllArticles from "./AllArticles"
import ArticlesByTopic from "./Articles-By-Topic"

function TopicsCoding () 
{

    const topic = "coding"
    return (<>
    <h3> Coding </h3>
    <p> Learn everything about coding - it's like The Matrix but less dangerous. </p>
    
    <ArticlesByTopic topic={topic}></ArticlesByTopic>

    
    
    </>)


}

export default TopicsCoding