import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import moment from "moment";

const NoteItem = ({ date, content }) => {
  return (
    <div className="note">
      <p className="note__date">Ngày: {moment(date).format("DD/MM/YYYY")}</p>
      <p className="note__content">{content}</p>
    </div>
  );
};

NoteItem.propTypes = {};

export default NoteItem;
