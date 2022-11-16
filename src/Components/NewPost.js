// import React from "react"; 
import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";


const NewPost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState ("")

    const [posts, setPosts] = useOutletContext()

    const navigate = useNavigate()

    async function submit (event) {
        event.preventDefault()
        try {
            if (!localStorage.getItem("token").length) {
                alert("you need to be logged in")
                return;
            }
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                  post: {
                       title,
                       description,
                       price
                    }
                })
            });
            const data = await response.json()
            // console.log("new post data: " ,data)
            setPosts([...posts, data.data.post])
            navigate("/PostsPage")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>Name</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <br/>
                <label>Description</label>
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}></input>
                <br/>
                <label>Price</label>
                <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                <br/>
                <button type = "submit">Post</button>
            </form>
        </div>
    )

}

export default NewPost;