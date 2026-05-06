import AllArticles from "./AllArticles"
import ArticlesByTopic from "./Articles-By-Topic"
import '../styles/Topics-Page.css'

function TopicsCoding () 
{

    const topic = "coding"
    return (<>
    <div className="single-topic-container">
    <h3 className="section-title"> Coding </h3>
    <p className="topic-description"> Learn everything about coding - it's like The Matrix but less dangerous. </p>
     </div>
    <ArticlesByTopic topic={topic}></ArticlesByTopic>
       
    </>
    
    )


}

export default TopicsCoding