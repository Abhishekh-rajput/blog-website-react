import React from "react";
import { Switch, Route } from "react-router-dom";
import { Context } from "./ContextApi/Context";
import Users from "./Pages/Users";
import Posts from "./Pages/Posts";
import SinglePost from "./Pages/SinglePost";
import ErrorPage from "./Pages/Error";

function App() {
  return (
    <Context>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/posts/:slug" component={Posts} />
        <Route exact path="/posts/:slug/:nuk" component={SinglePost} />
        <Route component={ErrorPage} />
      </Switch>
    </Context>
  );
}

export default App;
