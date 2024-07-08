import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // loading
  const [loading, setLoading] = useState(true);

  // error
  const [error, setError] = useState(null);

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

  const handleDelete = (id) => {
    setPosts(posts.filter((posts) => posts.id !== id));

    // delete data in db
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <PostItem posts={posts} handleDelete={handleDelete} />
    </>
  );
};
export default Home;
