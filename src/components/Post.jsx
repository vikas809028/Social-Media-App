/* eslint-disable react/prop-types */
import styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className={`card ${styles.postcard} w-75 rounded-full`}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>

          {/* If post.body is a string, uncomment this to display the post content */}
          {<p className="card-text">{post.body}</p>}

          {/* If post.tags is an array, uncomment this to display the tags */}
          {post.tags.map((hashtags) => (
            <span
              key={hashtags}
              className={`badge rounded-full fs-6 text-bg-primary ${styles.hashTag}`}
            >
              {hashtags}
            </span>
          ))}

          <div
            className={`alert alert-success ${styles.likeContainer}`}
            role="alert"
          >
            <AiTwotoneLike className={styles.likeIcon}></AiTwotoneLike> This
            post has {post.reactions.likes} likes and {post.reactions.dislikes}{" "}
            dislikes.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
