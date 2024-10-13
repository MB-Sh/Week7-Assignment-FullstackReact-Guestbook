import { useState, useEffect } from "react";


export default function NewForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    title: "",
    description: "",
    category: "",
    travel_tip: "",
    image_src: "",
  });

  const [newpost, setNewpost] = useState([]);

  // Fetch categories from the server
  useEffect(() => {
    async function fetchNewpost() {
      try {
        const response = await fetch("http://localhost:8080/categories");
        const data = await response.json();
        setNewpost(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchNewpost();
  }, []);

  // handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/add-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your name"
        required
        value={formValues.username}
        onChange={handleInputChange}
      />

      <label htmlFor="title">Post Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title of your post"
        required
        value={formValues.title}
        onChange={handleInputChange}
      />

      <label htmlFor="description">Post Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Describe your travel experience"
        required
        value={formValues.description}
        onChange={handleInputChange}
      ></textarea>

      <label htmlFor="travel_tip">Travel Tip</label>
      <input
        type="text"
        id="travel_tip"
        name="travel_tip"
        placeholder="Share a useful travel tip"
        value={formValues.travel_tip}
        onChange={handleInputChange}
      />

      <label htmlFor="image_src">Image URL</label>
      <input
        type="url"
        id="image_src"
        name="image_src"
        placeholder="Enter image URL"
        value={formValues.image_src}
        onChange={handleInputChange}
      />

      <label htmlFor="category">Select a Category</label>
      <select
        id="category"
        name="category"
        required
        value={formValues.category}
        onChange={handleInputChange}
      >
        <option value="">--Select a Category--</option>
        {newpost.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category_name}
          </option>
        ))}
      </select>

      <button type="submit">Add Post</button>
    </form>
  );
}
