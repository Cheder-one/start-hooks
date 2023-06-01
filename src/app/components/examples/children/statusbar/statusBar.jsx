/* eslint-disable */
import React from "react";
import StatusItem from "./statusItem";

const Statusbar = ({ children, value }) => {
   return (
      <div>
         <div className="wrapper">
            {React.Children.map(children, (child) => {
               if (child.type === StatusItem) {
                  return child;
               }
               return null;
            })}
         </div>
      </div>
   );
};

export default Statusbar;
