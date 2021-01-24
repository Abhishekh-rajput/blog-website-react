import React, { useContext } from "react";
import { Data } from "../ContextApi/Context";
import User from "../Components/User";
import { v4 as uuidv4 } from "uuid";
import Header from "../Components/Header";
import "../Styles/Users.scss";

function Users() {
  const { users, theme } = useContext(Data);
  return (
    <div className={theme}>
      <Header />
      <div className="main">
        {users.map((data) => {
          return <User user={data} theme={theme} key={uuidv4()} />;
        })}
      </div>
    </div>
  );
}

export default Users;
