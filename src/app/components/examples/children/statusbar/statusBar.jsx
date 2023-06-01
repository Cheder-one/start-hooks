/* eslint-disable */
import React from "react";
import StatusItem from "./statusItem";

const Statusbar = ({ children, value }) => {
   console.log(value);

   return (
      <div>
         <div className="wrapper">
            <ul className="step-progress">
               {React.Children.map(children, (child) => {
                  if (child.type === StatusItem) {
                     return React.cloneElement(child, {
                        isDone: value >= child.props.value
                     });
                  }
                  return null;
               })}
            </ul>
         </div>
      </div>
   );
};

export default Statusbar;
