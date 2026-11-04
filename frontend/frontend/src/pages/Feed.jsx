import React, { useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = React.useState([
    {
      _id: "1",
      image: "https://via.placeholder.com/150",
      caption: "This is a sample caption for post 1",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data.posts);
    });
  }, []);
  return (
    <section className="feed-section">
      <h1>Feed</h1>

      {posts.map((post) => (
        <div key={post._id} className="post">
          <img src={post.image} alt="Post" />
          <p>{post.caption}</p>
        </div>
      ))}
    </section>
  );
};

export default Feed;
