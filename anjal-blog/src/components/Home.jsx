import useFetch from "../hooks/useFetch";
import Bloglist from "./Bloglist";

const Homepage = () => {
  const {
    data: blogs,
    error,
    loading,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Homepage;
