import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function NewForm() {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    category: "",
    travel_tip: "",
    image_src: "",
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch categories from the server
  useEffect(() => {
    async function fetchLocationCategories() {
      try {
        const response = await fetch("https://week7-assignment-fullstackreact-guestbook.onrender.com/locations-categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchLocationCategories();
  }, []);

  // handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("https://week7-assignment-fullstackreact-guestbook.onrender.com/add-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        navigate("/posts");
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
    <div className="new-form">
    <form onSubmit={handleSubmit}>
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
        // required
        value={formValues.category}
        onChange={handleInputChange}
      >
        <option value="">--Select a Category--</option>
        {Array.isArray(categories) && categories.map((category, index) => (
        <option key={category.id || index} value={category.id}>
      {category.category_name}
          </option>
        ))}
      </select>

      <button type="submit">Add Post</button>
    </form> </div>
  );
}