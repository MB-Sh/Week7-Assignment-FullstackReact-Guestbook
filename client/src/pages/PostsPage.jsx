import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { Link,Outlet } from "react-router-dom";


export default function PostsPage() {
    let { postID } = useParams(); 
    const [posts, setPost] = useState([]); 

    // fetch post
    async function getPost() {
        try {
            const response = await fetch( "http://localhost:8080/locations-categories", {
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
        getPost();
      }, []);


    
    return (
        <div>
        <h1>Posts</h1>
        <Link to="/add-post">
        <button style={{ marginBottom: '20px' }}>Add New Post</button>
      </Link>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>Location:{post.title}</h2>
              <p><strong>Posted by:</strong> {post.username}</p> 
              <p><strong>Description:</strong> {post.description}</p>
              <p><strong>Travel Tip:</strong> {post.travel_tip}</p>
              {post.image_src && (
                <img 
                  src={post.image_src} 
                  alt={post.title} 
                />
              )}
              <p><strong>Category:</strong> {post.catergory_name}</p>
            </div>
          ))
        ) : (
          <p>No posts available yet.</p>
        )}
      </div>
    );
  }
