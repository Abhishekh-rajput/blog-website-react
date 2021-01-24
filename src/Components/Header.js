import React, { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { RiSunFill } from "react-icons/ri";
import Button from "@material-ui/core/Button";
import "../Styles/Header.scss";
import { Data } from "../ContextApi/Context";
import { Link } from "react-router-dom";

function Header() {
  const { ChangeTheme, theme } = useContext(Data);
  return (
    <div className={theme}>
      <div className="main_header">
        <div className="theme">
          <h1>{theme}</h1>
          <Button variant="contained" className="btn" onClick={ChangeTheme}>
            Change Theme
            {theme === "light" ? (
              <RiSunFill className="moon" />
            ) : (
              <FiSun className="sun" />
            )}
          </Button>
        </div>
        <div className="navLinks">
          <ul className="list">
            <li>
              <Link to="/" className="link">
                Users
              </Link>
            </li>
            <li>
              <Link to={"/asd"} className="link">
                Error
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
