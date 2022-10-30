import React, {useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState("Text")
    const [posts, setPost] = useState([
        {id: 1, title: 'Python', body: "Python - Лучший язык для бекенда"},
        {id: 2, title: 'Go', body: "Go - тоже в целом не плох"}]
    )

    return (

        <div className="App">
            <h1 style={{textAlign: "center"}}>Список постов</h1>
            {
                posts.map( post =>
                    <PostItem post={post}/>
                )}


        </div>);
}

export default App;
