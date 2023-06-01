/* eslint-disable */
import React from "react";
import StatusItem from "./statusItem";

const Statusbar = ({ children, value, onChange }) => {
   return (
      <div className="wrapper">
         <ul className="step-progress">
            {React.Children.map(children, (child) => {
               if (child.type === StatusItem) {
                  return React.cloneElement(child, {
                     isDone: value >= child.props.value,
                     onClick: onChange
                  });
               }
               return null;
            })}
         </ul>
      </div>
   );
};

export default Statusbar;
