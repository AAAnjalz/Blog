import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Blogdetails = () => {
  const { id } = useParams();
  const {
    data: blogs,
    error,
    loading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && (
        <div>
          {
            <div className="body">
              <h1>{blogs.title}</h1>
              <p>{blogs.body}</p>
              <h4>Written by {blogs.author}</h4>
            </div>
          }
        </div>
      )}
      <button className="button-delete" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default Blogdetails;
