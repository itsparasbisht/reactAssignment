import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './posts.css'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="posts">
            {posts.map(post => (
                <div key={post.id}>
                    <h1>{ post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title}</h1>
                    <p>{post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}</p>
                    <Link to={`/singlePost/${post.id}`}>view</Link>
                </div>
            ))}
        </div>
    )
}

export default Posts
