/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const StatusItem = ({ children, value, isDone, onClick }) => {
   const className = `step-progress-item ${isDone ? "is-done" : "current"}`;

   const handleClick = () => {
      onClick && onClick(value);
   };

   return (
      <div className={className} onClick={handleClick}>
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
