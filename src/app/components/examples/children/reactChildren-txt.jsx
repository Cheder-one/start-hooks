/* eslint-disable */
import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import StatusItem from "./statusbar/statusItem";
import Statusbar from "./statusbar/statusBar";

const SomeComponent = () => {
   const [doneValue, setDoneValue] = useState(1);

   const handleChangeValue = (val) => {
      setDoneValue(val);
   };

   return (
      <CardWrapper>
         <Statusbar value={doneValue} onChange={handleChangeValue}>
            <StatusItem value={1}>Шаг 1</StatusItem>
            <StatusItem value={2}>Шаг 2</StatusItem>
            <StatusItem value={3}>Шаг 3</StatusItem>
            <StatusItem value={4}>Шаг 4</StatusItem>
            <StatusItem value={5}>Шаг 5</StatusItem>
         </Statusbar>
      </CardWrapper>
   );
};

export default SomeComponent;
