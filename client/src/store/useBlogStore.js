import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: [],

  // Get Blogs
  fetchBlogs: async () => {
    const res = await fetch("http://localhost:3000/api/v1/cats");

    const data = await res.json();

    set({
      blogs: data.payload,
    });
  },

  // Get one blog
  // fetchOneBlog: async (id) => {
  //   const res = await fetch(`http://localhost:3000/api/v1/cats/${id}`);

  //   const data = await res.json();

  //   set({
  //     blog: data.payload,
  //   });
  // },

  // Create blog
  createBlog: async (payload) => {
    const res = await fetch("http://localhost:3000/api/v1/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    });

    const data = await res.json();

    set((prevState) => ({
      blogs: [data.payload, ...prevState.blogs],
    }));
  },

  // Delete blog
  deleteBlog: async (id) => {
    const res = await fetch(`http://localhost:3000/api/v1/cats/${id}`, {
      method: "DELETE",
    });

    const { payload } = await res.json();

    set((prevState) => ({
      blogs: prevState.blogs.filter((blog) => blog.id !== payload.id),
    }));
  },
}));

export default useBlogStore;
