import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext } from "react";
import WelcomeMesssage from "./WelcomeMesssage";
const PostList = () => {
  const { postList } = useContext(PostListData);
  // const handleGetPosts = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => addInitailPosts(data.posts));
  // };
  return (
    <>
      <div
        className="d-flex flex-row flex-wrap justify-content-around "
        style={{ marginTop: "100px" }}
      >
        {postList.length > 0 ? (
          postList.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <WelcomeMesssage />
        )}
      </div>
    </>
  );
};

export default PostList;
