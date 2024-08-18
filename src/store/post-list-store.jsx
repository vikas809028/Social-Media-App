/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

//all components inside postList Provider can use value of this context
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitailPosts: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...newPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  // const addPost = (post) => {
  //   dispatchPostList({
  //     type: "ADD_POST",
  //     payload: post,
  //   });
  // };

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitailPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };
  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  // context me postList ,addPost and deletePost hai but addPost maine reducer se liya hai
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Hell",
    body: "Hii I am A software Engineer Hii I am A software Engineer Hii I am A software EngineerHii I am A software Engineer",
    reactions: 0,
    userId: "user-9",
    tags: ["engineer", "cse"],
  },
  {
    id: "2",
    title: "Go to Hell",
    body: "Hii I am A software Engineer Hii I am A software Engineer Hii I am A software Engineer Hii I am A software EngineerHii I am A software Engineer",
    reactions: 0,
    userId: "user-12",
    tags: ["engineer", "cse"],
  },
];

export default PostListProvider;

// useEffect(() => {
//   setFetching(true);
//   const controller = new AbortController();
//   const signal = controller.signal;
//   fetch("https://dummyjson.com/posts", { signal })
//     .then((res) => res.json())
//     .then((data) => {
//       addInitailPosts(data.posts);
//       setFetching(false);
//     });

//   return () => {
//     controller.abort();
//   };
// }, []);
