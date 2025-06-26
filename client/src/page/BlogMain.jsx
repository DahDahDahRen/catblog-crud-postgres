import Container from "../layout/Container";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";

export default function BlogMain() {
  return (
    <Container>
      <BlogForm />
      <BlogList />
    </Container>
  );
}
