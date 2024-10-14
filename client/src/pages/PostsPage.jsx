import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { Link } from "react-router-dom";


export default function PostsPage() {
    let { postID } = useParams(); 
    const [posts, setPost] = useState([]); 

    // fetch post
    async function getPost() {
        try {
            const response = await fetch( "https://week7-assignment-fullstackreact-guestbook.onrender.com", {
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

      // to delete post deletion
    async function handleDelete(postId) {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      try {
        const response = await fetch("https://week7-assignment-fullstackreact-guestbook.onrender.com", {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Post deleted successfully!");
          setPost(posts.filter((post) => post.id !== postId));
        } else {
          alert("Error deleting post");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  }


    
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
              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            </div>
          ))
        ) : (
          <p>No posts available yet.</p>
        )}
      </div>
    );
  }