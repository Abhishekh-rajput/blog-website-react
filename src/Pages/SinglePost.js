import React, { useContext, useEffect } from "react";
import { Data } from "../ContextApi/Context";
import Header from "../Components/Header";
import "../Styles/SinglePost.scss";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function SinglePost(props) {
  const { findSinglePost, loadComments } = useContext(Data);
  const { singlePost } = useContext(Data);
  const { comments, theme } = useContext(Data);

  useEffect(() => {
    findSinglePost(props.match.params.nuk);
    loadComments(props.match.params.nuk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={theme}>
      <Header />
      <div className="single_post_main">
        <div className="post">
          <Link to={`/posts/${props.match.params.slug}`} className="ArrowBack">
            <Tooltip title="Back">
              <ArrowBackIcon fontSize="large" />
            </Tooltip>
          </Link>
          <div className="id">
            <div className="userId">
              <span>By User Number: </span>
              <span>{singlePost.userId}</span>
            </div>
            <div className="postId">
              <span>Post Number: </span>
              <span>{singlePost.id}</span>
            </div>
          </div>
          <div className="post_title">
            <span>Title: </span>
            <span>{singlePost.title}</span>
          </div>
          <div className="post_body">
            <span>Body: </span>
            <span>{singlePost.body}</span>
          </div>
          <div className="comment_box">
            <div className="heading">
              <h2>Comments</h2>
            </div>
            {comments.map((data) => {
              return (
                <div className="comments">
                  <div className="details">
                    <div className="by">
                      <span>By: </span>
                      <span>{data.email}</span>
                    </div>
                  </div>
                  <div className="comment_body">
                    <div className="comment_body">
                      <span>Body: </span>
                      <span>{data.body}</span>
                    </div>
                  </div>
                  <div className="sender_details">
                    <div className="comment_id">
                      <span>Comment Id: </span>
                      <span>{data.id}</span>
                    </div>
                    <div className="name">
                      <span></span>
                      <span>{data.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
