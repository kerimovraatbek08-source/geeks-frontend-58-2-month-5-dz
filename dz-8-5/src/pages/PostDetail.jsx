import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export const PostDetail = () => {
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <h2>Пост не найден</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
