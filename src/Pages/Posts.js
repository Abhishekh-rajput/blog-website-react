import React, { useEffect, useContext } from "react";
import { Data } from "../ContextApi/Context";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "../Components/Header";
import "../Styles/Posts.scss";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";

function Posts(props) {
  const { callingPostsbyUserId, onSearchBoxChange } = useContext(Data);

  const { posts, theme, search } = useContext(Data);

  useEffect(() => {
    callingPostsbyUserId(props.match.params.slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={theme}>
      <Header />
      {posts.length !== 0 ? (
        <div className="post_main">
          <Link to={`/`} className="ArrowBack" style={{ marginTop: "30px" }}>
            <Tooltip title="Back">
              <ArrowBackIcon fontSize="large" />
            </Tooltip>
          </Link>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
            onChange={(e) => {
              onSearchBoxChange(e);
            }}
            value={search}
          />
          {posts.map((data) => {
            if (data.title.includes(search)) {
              return (
                <div key={uuidv4()} className="posts">
                  <div className="id">
                    <div className="userId">
                      <span>By User Number: </span>
                      <span>{data.userId}</span>
                    </div>
                    <div className="postId">
                      <span>Post Number: </span>
                      <span>{data.id}</span>
                    </div>
                  </div>
                  <div className="post_title">
                    <span>Title: </span>
                    <span>{data.title}</span>
                  </div>
                  <div className="post_body">
                    <span>Body: </span>
                    <span>{data.body}</span>
                  </div>
                  <div className="link_div">
                    <Link
                      to={`/posts/${props.match.params.slug}/${data.id}`}
                      className="link"
                    >
                      comments
                    </Link>
                  </div>
                </div>
              );
            } else {
              return "";
            }
          })}
        </div>
      ) : (
        <div className="post_main with_error">
          <div className="page_not_found">
            <h2>Trying for wrong user</h2>
            <Link to={`/`} className="ArrowBack" style={{ marginTop: "30px" }}>
              <Tooltip title="Users">
                <ArrowBackIcon fontSize="large" />
              </Tooltip>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;
