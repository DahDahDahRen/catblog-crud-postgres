import Container from "../layout/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogUpdate() {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
  });
  const { id } = useParams();

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

  return (
    <Container>
      <header className="update-header_container">
        <Link to="/">
          <button>Go Back to Main</button>
        </Link>

        <span>Blog post</span>
      </header>

      <section>
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
      </section>
    </Container>
  );
}
