import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

export default function PostsPage() {
    let { postID } = useParams(); 
    const [post, setPost] = useState([]); 

    // fetch a single post by its ID
    async function getPost() {
        try {
            const response = await fetch(`http://localhost:8080/locations-categories/${postID}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            setPost(data); 
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    }

  
    useEffect(() => {
        if (postID) {
            getPost();
        }
    }, [postID]);


    
    return (
        <div>
            <h1>{post.title}</h1>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Travel Tip:</strong> {post.travel_tip}</p>
            {post.image_src && (
                <img 
                    src={post.image_src} 
                    alt={post.title} 
                    style={{ width: "300px", height: "auto" }} 
                />
            )}
            <p><strong>Category:</strong> {post.catergory_name}</p>
        </div>
    );
}
