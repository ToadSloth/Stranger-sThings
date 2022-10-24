import React from "react";
import { useOutletContext } from "react-router-dom";

const PostsPage = () => {
    const posts = useOutletContext() [0]

    return (
        <div>
            {
                posts && posts.length ? posts.map((post,idx) => {
                    return<div key={idx}>
                        <p>{post.title}</p>
                    </div>
                }) : <p>No listings</p>
            }
        </div>
    )
}

export default PostsPage