import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // axios
    //   .get("/")
    //   .then((response) => {
    //     console.log(response);
    //     setUser(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(`Error fetching data ${error}`);
    //   });
  }, []);

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">
            <h1 className="logo km">Notes</h1>
          </Link>
        </li>
        <li className="one-line-align">
          {/* If logged in: Pfp + Username */}
          {/* If not logged in: Icon + Login Link */}
          {user === null ? (
            <div className="one-line-align">
              <Link to="" className="one-line-align">
                <span className="material-symbols-outlined">
                  admin_panel_settings
                </span>
              </Link>
              <Link to="/login" className="one-line-align icon-text">
                <span className="material-symbols-outlined">login</span> Login
              </Link>
            </div>
          ) : (
            <div className="one-line-align ">
              <Link className="one-line-align pad-right">pfp Profile</Link>
              <Link className="one-line-align pad-right">
                <span className="material-symbols-outlined">login</span>Logout
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
