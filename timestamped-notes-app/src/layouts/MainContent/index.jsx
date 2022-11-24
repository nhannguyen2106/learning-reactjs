import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FormCreate from "../../components/FormCreate";
import NotesList from "../../components/NotesList";
import "./styles.scss";
import noteApis from "../../apis/noteApis";
import { STATUS_CODE } from "../../components/constants";
import moment from "moment";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const MainContent = (props) => {
  const [noteValues, setNoteValues] = useState([]);
  const [open, setOpen] = useState(true);

  const fetchData = async () => {
    const response = await noteApis.getAll("/notes");

    if (response.status === STATUS_CODE.OK) {
      setNoteValues(response.data);
    } else {
      alert("Get list failed");
      console.log(response.status);
    }
  };

  const isEqualDate = noteValues.filter(
    (item) => item.date === moment().format("YYYY-MM-DD")
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="header">
        {isEqualDate.length > 0 && (
          <Collapse in={open}>
            <Alert
              icon={false}
              style={{ width: "20%", margin: "auto" }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {isEqualDate.map((item) => (
                <div>{item.content}</div>
              ))}
            </Alert>
          </Collapse>
        )}
      </div>
      <h1>Nhắc nhở ngày quan trọng của bạn</h1>
      <div className="main">
        <div className="left">
          <FormCreate setNoteValues={setNoteValues} />
        </div>
        <div className="right">
          <NotesList noteValues={noteValues} />
        </div>
      </div>
    </>
  );
};

MainContent.propTypes = {};

export default MainContent;
