import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault();

    const newPost = {
      title,
      body,
      created_at: new Date().toLocaleDateString(),
    };

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-6 text-blue-700">
        Create a new post
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Post Title</label>
          <input
            type="text"
            className="border-0 outline-0 p-2 ring-1 ring-blue-600 rounded-lg w-full block mt-1 focus:ring-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="">Post content</label>
          <textarea
            className="border-0 outline-0 p-2 ring-1 ring-blue-600 rounded-lg w-full block mt-1 focus:ring-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button className="p-2 bg-blue-400 text-white block w-full rounded-lg hover:bg-blue-600 hover:text-white">
          Create
        </button>
      </form>
    </>
  );
};
export default PostCreate;
