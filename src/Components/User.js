import React from "react";
import { Link } from "react-router-dom";
function User(props) {
  return (
    <div className="box">
      <div className="name">
        <h2>{props.user.name}</h2>
      </div>
      <div className="more_details">
        <div className="id">
          <span>ID: </span>
          <span>{props.user.id}</span>
        </div>
        <div className="email">
          <span>Email: </span>
          <span>{props.user.email}</span>
        </div>
      </div>
      <div className="more_details">
        <div className="username">
          <span>Username: </span>
          <span>{props.user.username}</span>
        </div>
        <div className="company">
          <span>Company: </span>
          <span>{props.user.company.name}</span>
        </div>
      </div>
      <div className="posts_link">
        <span>Blogs Posted: </span>
        <Link to={`/posts/${props.user.id}`} className="link">
          check
        </Link>
      </div>
    </div>
  );
}

export default User;
