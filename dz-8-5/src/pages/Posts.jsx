import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { posts as data } from "../data/posts";
import { Loader } from "../components/Loader";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>Посты</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};
