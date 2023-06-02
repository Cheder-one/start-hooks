import React from "react";
import StatusItem from "./statusItem";
import PropTypes from "prop-types";

const Statusbar = ({ children, value, onDone }) => {
   const countChildren = React.Children.count(children);

   if (!countChildren) {
      return <div>Нет элементов</div>;
   }

   return (
      <div className="wrapper">
         <ul className="step-progress">
            {React.Children.map(children, (child) => {
               if (child.type === StatusItem) {
                  return React.cloneElement(child, {
                     isDone: value >= child.props.value,
                     onDone: onDone
                  });
               }
               return null;
            })}
         </ul>
      </div>
   );
};

Statusbar.propTypes = {
   children: PropTypes.node.isRequired,
   value: PropTypes.number.isRequired,
   onDone: PropTypes.func
};

export default Statusbar;
