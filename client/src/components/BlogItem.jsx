import useBlogStore from "../store/useBlogStore";
import { Link } from "react-router-dom";

export default function BlogItem({ blog }) {
  const { deleteBlog } = useBlogStore();

  const handleDeleteButton = (e) => {
    deleteBlog(blog.id);
  };

  return (
    <li>
      <article className="resource-card">
        <h3 className="h3">{blog.title}</h3>
        <p>{blog.body}</p>

        <div className="blog-item_control">
          <button onClick={handleDeleteButton} className="warning">
            Delete
          </button>

          <Link to={`/update/${blog.id}`} className="success">
            <button> Update</button>
          </Link>
        </div>
      </article>
    </li>
  );
}
