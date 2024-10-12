import { useParams, useNavigate } from "react-router-dom";

export default function Post({ post }) {
  const {id} = useParams();  // This fetches the postID from the URL if you are using dynamic routes.
  const navigate = useNavigate();

  // Function to delete a post
  async function handleDelete() {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8080/delete-location/${post.id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Post deleted successfully!");
          navigate("/posts");  // Redirect back to the posts page after deletion
        } else {
          console.error("Failed to delete post");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  }

  return (
    <div className="delete-post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p><strong>Category:</strong> {post.catergory_name}</p>
      <p><strong>Travel Tip:</strong> {post.travel_tip}</p>
      <img src={post.image_src} alt={post.title} />

      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}
