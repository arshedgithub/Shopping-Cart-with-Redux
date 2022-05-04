import { Alert } from "@mui/material";
import React from "react";

const Notification = ({ type, message }) => {
  return (
    <div>
      <Alert severity={type}>{message}</Alert>
    </div>
  );
};

export default Notification;
