import { useEffect, useState, createContext } from "react";
import PostItem from "../components/PostItem";
import Success from "../components/Success";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // loading
  const [loading, setLoading] = useState(true);

  // error
  const [error, setError] = useState(null);

  // success
  const [success, setSuccess] = useState(null);

  // get data from db
  // to run server
  // npx json-server .\db.json -w -d 1000
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        // sort date
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []); // use with , []  it will only call for 1 time at the start

  const handleDelete = async (id) => {
    if (confirm("confirm delete?")) {
      try {
        // delete data in db
        const del = await fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
        });
        setSuccess("Post is deleted");
        setPosts(posts.filter((posts) => posts.id !== id));
      } catch (error) {
        setError(error.message);
      }
    }
  };
  return (
    <>
      {loading && <h1>Loading...</h1>}

      {success && <Success msg={success} />}
      {error && <Alert msg={error} />}

      {posts.map((post) => (
        <div key={post.id} className="p-6 border-b">
          <PostItem post={post} handleDelete={handleDelete} />
        </div>
      ))}
    </>
  );
};
export default Home;
