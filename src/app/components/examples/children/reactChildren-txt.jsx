import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import StatusItem from "./statusbar/statusItem";
import Statusbar from "./statusbar/statusBar";

const SomeComponent = () => {
   const [doneValue, setDoneValue] = useState(0);

   const handleClickDone = (stepValue) => {
      setDoneValue(stepValue);
   };

   return (
      <CardWrapper>
         <Statusbar value={doneValue} onDone={handleClickDone}>
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
