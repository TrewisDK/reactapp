import React, {useState} from 'react';

const Counter = function (){
    const [likes, setLikes] = useState(0)
    function like() {
        setLikes(likes + 1)
    }

    function dis() {
        setLikes(likes - 1)
    }
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={like}>Like</button>
            <button onClick={dis}>DisLike</button>
        </div>

    )

};

export default Counter;