import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Anjal");
  const [isLoading, setisLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setisLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setisLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleChange}>
        <label> Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body</label>
        <textarea
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Select author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Anjal">Anjal</option>
          <option value="Anzuuu">Anzuuu</option>
        </select>

        {!isLoading && <button>Create</button>}
        {isLoading && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
