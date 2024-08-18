import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext } from "react";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      <div className="d-flex flex-row flex-wrap">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
