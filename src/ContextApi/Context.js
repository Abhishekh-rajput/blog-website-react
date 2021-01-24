import React, { createContext, useEffect, useState } from "react";

export const Data = createContext();

export function Context(props) {
  const [search, setSearch] = useState("");

  const [users, setData] = useState([]);

  const [posts, setPosts] = useState([]);

  const [singlePost, setSinglePost] = useState({});

  const [comments, setComments] = useState([]);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const callingPostsbyUserId = (id) => {
    id = parseInt(id);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        const arr = json.filter((data) => data.userId === id);
        setPosts(arr);
      })
      .catch((err) => console.log("Error"));
  };

  const findSinglePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setSinglePost(json))
      .catch((err) => console.log(err));
  };

  const loadComments = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((json) => setComments(json))
      .catch((err) => console.log(err));
  };

  const ChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const onSearchBoxChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Data.Provider
      value={{
        users,
        callingPostsbyUserId,
        posts,
        findSinglePost,
        singlePost,
        loadComments,
        comments,
        ChangeTheme,
        theme,
        onSearchBoxChange,
        search,
      }}
    >
      {props.children}
    </Data.Provider>
  );
}
