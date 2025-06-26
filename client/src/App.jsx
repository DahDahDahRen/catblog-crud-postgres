import BlogMain from "./page/BlogMain";
import BlogUpdate from "./page/BlogUpdate";
import useBlogStore from "./store/useBlogStore";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { fetchBlogs } = useBlogStore();

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<BlogMain />} />
      <Route path="/update/:id" element={<BlogUpdate />} />
    </Routes>
  );
}

export default App;
