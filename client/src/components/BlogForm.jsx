import { useState } from "react";
import useBlogStore from "../store/useBlogStore";

export default function BlogForm() {
  const { createBlog } = useBlogStore();
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createBlog(form);
    setForm({
      title: "",
      body: "",
    });
  };

  return (
    <section className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-input_container">
          <div>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={handleInputChange}
              value={form.title}
            />
          </div>

          <div>
            <textarea
              name="body"
              id="body"
              placeholder="Get Started..."
              onChange={handleInputChange}
              value={form.body}
            ></textarea>
          </div>
        </div>

        <div className="form-control">
          <button type="submit">Create Blog</button>
        </div>
      </form>
    </section>
  );
}
