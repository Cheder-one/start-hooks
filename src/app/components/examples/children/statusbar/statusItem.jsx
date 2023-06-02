/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const StatusItem = ({ children, value, isDone, onDone }) => {
   const className = `step-progress-item ${isDone ? "is-done" : "current"}`;

   const handleClickDone = () => {
      onDone && onDone(value);
   };

   return (
      <div className={className} onClick={handleClickDone}>
         <strong style={{ cursor: "pointer" }}>{children}</strong>
      </div>
   );
};

StatusItem.propTypes = {
   children: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired,
   isDone: PropTypes.bool,
   onDone: PropTypes.func
};

export default StatusItem;
