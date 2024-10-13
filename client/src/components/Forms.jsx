import { useState, useEffect } from "react";
import locationData from "../lib/locationData.json";

export default function TravelForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    title: "",
    description: "",
    category: "",
    travel_tip: "",  
    image_src: "",   
  });

  const [categories, setCategories] = useState([]);
//   const [locations, setLocations] = useState([]);

  // fetching from my json
  useEffect(() => {
    setCategories(locationData.categories); 
    // setLocations(locationData.locations);  
  }, []);

  
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with values: ", formValues);
    alert("Form submitted successfully!");
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
        id="name"
        name="name"
        placeholder="Enter your name"
        required
        value={formValues.name}
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
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category_name}
          </option>
        ))}
      </select>

      
      {/* <p>Current Name: {formValues.name}</p>
      <p>Current Title: {formValues.title}</p>
      <p>Current Description: {formValues.description}</p>
      <p>Current Travel Tip: {formValues.travel_tip}</p>
      <p>Current Image URL: {formValues.image_src}</p>
      <p>Current Category ID: {formValues.category}</p> */}

      <button type="submit">Add Post</button>
    </form>
  );
}
