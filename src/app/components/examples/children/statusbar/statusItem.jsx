/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const StatusItem = ({ children, isDone }) => {
   const className = `step-progress-item ${isDone ? "is-done" : "current"}`;
   return (
      <div className={className}>
         <strong>{children}</strong>
      </div>
   );
};
StatusItem.propTypes = {
   children: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired,
   isDone: PropTypes.bool
};

export default StatusItem;
