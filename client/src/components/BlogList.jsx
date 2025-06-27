import BlogItem from "./BlogItem";
import BlogDefault from "./BlogDefault";
import useBlogStore from "../store/useBlogStore";
import { useEffect } from "react";

export default function BlogList() {
  const { blogs, fetchBlogs } = useBlogStore();

  useEffect(() => {
    fetchBlogs();
  }, []);

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
