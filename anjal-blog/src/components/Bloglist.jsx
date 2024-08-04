import { Link } from "react-router-dom";
const Bloglist = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
