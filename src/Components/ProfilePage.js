
import { Link, useOutletContext, } from "react-router-dom";
import React from "react"; 


const ProfilePage = () => {
    const [,,profileStuff, setProfileStuff] = useOutletContext()
    console.log("the profile goods:", profileStuff)

    const toDelete = async (deletePost) => {
        console.log('deletePost: ', deletePost)
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${deletePost}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);
    }

   return (
    <div>
        <p class="p">Profile</p>
        <p class="p">Your listings</p>
        {
            profileStuff.posts ? profileStuff.posts.map((singlePost, idx) => {
                return <div key={idx}>
                    <p>{singlePost.title}</p>
                    <button onClick={() => toDelete(singlePost._id)}>Delete</button>
                    
                    <Link to={`/profile/${singlePost._id}`}></Link>
                </div>
            }) : null
        }
    </div>
   )
}



export default ProfilePage;