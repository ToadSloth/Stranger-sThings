import React, { useEffect, useState } from "react"
import {Link,Outlet} from "react-router-dom"

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-FT/posts")
                const data = await response.json()
                console.log("my data", data)
                setPosts(data.data.posts)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPosts()
    }, []);



    return (
        <div>This is the HomePage
        <nav>
            <Link to = "HomePage">HomePage</Link>
            <Link to = "RegisterPage">Register</Link>
            <Link to = "LoginPage">Login</Link>
            <Link to = "PostsPage"> Listings</Link>
        </nav>
        <Outlet context={[posts, setPosts]} />
        </div>
    )
}

export default HomePage;