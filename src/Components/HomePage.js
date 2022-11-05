import React, { useEffect, useState } from "react"
import {Link,Outlet} from "react-router-dom"

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [profileStuff, setProfileStuff] =useState({})
    
    
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

    useEffect(() => {
        async function ProfileInfo () {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-FT/users/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                const data = await response.json()
                console.log("profile comp", data)
                setProfileStuff(data.data)

            }catch (error) {
                console.log(error)
            }
        }
        ProfileInfo()
    }, [])

    return (
        <div>
            <div class="hometex">This is the HomePage</div>
        <nav>
            <Link class="links" to = "HomePage">HomePage</Link>
            <Link class="links" to = "RegisterPage">Register</Link>
            <Link class="links" to = "LoginPage">Login</Link>
            <Link class="links" to = "PostsPage"> Listings</Link>
            <Link class="links" to = "NewPost">NewPost</Link>
            <Link class="links" to = "ProfilePage">Profile</Link>
        </nav>
        <Outlet context={[posts, setPosts, profileStuff, setProfileStuff]} />
        </div>
    )
}

export default HomePage;

