import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  // Use location hook to receive data from Home
  // the state data come from <Link state=""> in PostItem.jsx
  const { state } = useLocation();
  // Form state
  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault();

    const updatePost = {
      title,
      body,
      created_at: new Date().toLocaleDateString(),
    };

    fetch("http://localhost:3000/posts/" + state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePost),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-6 text-blue-700">Update the post</h1>
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
          Update
        </button>
      </form>
    </>
  );
};
export default Update;
