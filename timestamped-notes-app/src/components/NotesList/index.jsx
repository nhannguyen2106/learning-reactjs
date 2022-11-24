import React from "react";
import PropTypes from "prop-types";
import NoteItem from "../NoteItem";

const NotesList = ({ noteValues }) => {
  return (
    <div>
      {noteValues.map((item) => (
        <NoteItem date={item.date} content={item.content} />
      ))}
    </div>
  );
};

NotesList.propTypes = {};

export default NotesList;
