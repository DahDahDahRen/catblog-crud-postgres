import BlogItem from "./BlogItem";
import BlogDefault from "./BlogDefault";
import useBlogStore from "../store/useBlogStore";

export default function BlogList() {
  const { blogs } = useBlogStore();

  return (
    <div>
      {blogs.length === 0 ? (
        <BlogDefault />
      ) : (
        <ul>
          {blogs
            .map((blog) => <BlogItem key={blog.id} blog={blog} />)
            .reverse()}
        </ul>
      )}
    </div>
  );
}
