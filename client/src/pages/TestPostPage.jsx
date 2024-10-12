import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Forms from "../"

//Here I will fetch the posts from the server (get endpoint), which is getting the posts from the db
export default function PostsPage() {
    let {postID}= useParams;
    const [post, setPost] =useState([]);

    async function getPost(){
        //i need to call the API
        const  response=await fetch( "http://localhost:8080/locations-categories",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({postID})
            },
        );
        const data =await response.json();
        console.log (data);
        setPost(data);
    }
    useEffect(()=> {
        getPost ();   
    }, []);

    return(
        <>
        <h1>My Post</h1>
        {post.map(function (thisPost){
            return(
                <Post key={this.id} id={thisPost.id}
                
       
                />
            );
        })}
    </>
  );
}


       