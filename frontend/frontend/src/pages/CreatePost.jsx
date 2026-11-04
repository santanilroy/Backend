// import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post("http://localhost:3000/create-posts", formData)
      .then((response) => {
        navigate("/feed");
        console.log(response.data);
        alert("Post created successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Error creating post");
      });
  };
  return (
    <section className="create-post-section">
      <h1>Create post</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="image" accept="image/*" />
        <input
          type="text"
          name="caption"
          placeholder="Enter caption"
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
