import Container from "../layout/Container";
import useBlogStore from "../store/useBlogStore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogUpdate() {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
  });
  const { id } = useParams();
  const { updateBlog } = useBlogStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/cats/${id}`)
      .then((res) => res.json())
      .then((res) => setBlog(res.payload));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    updateBlog(id, blog);
    navigate("/");
  };

  return (
    <Container>
      <header className="update-header_container">
        <Link to="/">
          <button>Go Back to Main</button>
        </Link>

        <span>Blog post</span>
      </header>

      <section>
        <form className="update-form_container" onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            name="title"
            value={blog?.title}
            onChange={handleInputChange}
          />
          <textarea
            name="body"
            value={blog?.body}
            onChange={handleTextChange}
          ></textarea>

          <div>
            <button>Update</button>
          </div>
        </form>
      </section>
    </Container>
  );
}
