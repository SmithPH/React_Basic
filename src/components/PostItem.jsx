import { Link } from "react-router-dom";

const PostItem = ({ post, handleDelete }) => {
  return (
    <>
      <div>
        <div className="mb-4 flex justify-between items-start">
          <div>
            <h2 className="font-bold mb-2 text-lg text-blue-500">
              {post.title}
            </h2>
            <small className="text-gray-500 text-xs">
              Posted on: {post.created_at}
            </small>
          </div>
          <div>
            <Link
              className="mx-2 px-2 bg-green-500 text-white rounded-md"
              title="Update"
              state={post} // Send the posts to the Update page
              to="/update"
            >
              Update
            </Link>

            <button
              onClick={() => handleDelete(post.id)}
              className="mx-2 px-2 bg-red-500 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostItem;
