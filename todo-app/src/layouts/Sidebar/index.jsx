import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <p>
          <Link to="/home">All tasks</Link>
        </p>
      </div>
      <div className="sidebar__item">
        <p>
          <Link to="/new-task">New Task</Link>
        </p>
      </div>
      <div className="sidebar__item">
        <p>
          <Link to="/doing-task">Doing Task</Link>
        </p>
      </div>
      <div className="sidebar__item">
        <p>
          <Link to="/done-task">Done Task</Link>
        </p>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
