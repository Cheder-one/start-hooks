/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const StatusItem = ({ children, value, isDone }) => {
   console.log(value);
   const getItemClass = () => {
      return `step-progress-item ${isDone ? "is-done" : "current"}`;
   };

   return (
      <div className={getItemClass}>
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
