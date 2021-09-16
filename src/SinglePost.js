import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import './singlePost.css'

function SinglePost() {
    const {id} = useParams()
    const [details, setDetails] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
        .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/`)
        .then(res => res.json())
        .then(data => {
            const filterComments = data.filter(item => item.postId == id)
            setComments(filterComments)
        })
    }, [id])

    return (
        <div className="singlePost">
            <div className="singlePost__head">
                <h1>{details.title}</h1>
                <p>{details.body}</p>
            </div>
            <div className="singlePost__comments">
                {
                    comments.length > 0 ?
                        comments.map(comment => (
                            <div>
                                <h1>{comment.name}</h1>
                                <p>{comment.body}</p>
                                <h3>{comment.email}</h3>
                            </div>
                        )) :
                        <h1>no comments yet</h1>
                }
            </div>
        </div>
    )
}

export default SinglePost
