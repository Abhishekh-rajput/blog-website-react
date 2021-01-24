import React, { useContext } from "react";
import "../Styles/Error.scss";
import Header from "../Components/Header";
import { Data } from "../ContextApi/Context";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

function Error() {
  const { theme } = useContext(Data);
  return (
    <div className={theme}>
      <Header />
      <div className="error_main">
        <div className="page_not_found">
          <h2>
            <span>404</span> Page Not Found
          </h2>
          <Link to={`/`} className="ArrowBack" style={{ marginTop: "30px" }}>
            <Tooltip title="Users">
              <ArrowBackIcon fontSize="large" />
            </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
