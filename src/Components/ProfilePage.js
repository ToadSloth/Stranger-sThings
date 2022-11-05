
import { Link, useOutletContext, } from "react-router-dom";
import React from "react"; 


const ProfilePage = () => {
    const [,,profileStuff, setProfileStuff] = useOutletContext()
    console.log("the profile goods:", profileStuff)

   return (
    <div>
        <p class="p">Profile</p>
        <p class="p">Your listings</p>
        {
            profileStuff.posts ? profileStuff.posts.map((singlePost, idx) => {
                return <div key={idx}>
                    <p>{singlePost.title}</p>
                    <Link to={`/profile/${singlePost._id}`}></Link>
                </div>
            }) : null
        }
    </div>
   )
}



export default ProfilePage;