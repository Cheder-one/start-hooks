/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
   const blockRef = useRef();
   const smallRef = useRef();

   const [stateUpd, setStateUpd] = useState(0);

   const handleChange = () => {
      const { style } = blockRef.current;
      style.color = "white";
      style.width = "150px";
      style.height = "150px";

      smallRef.current.innerText = "text";
   };

   return (
      <CollapseWrapper title="Упражнение">
         <p className="mt-3">
            У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку,
            при нажатии которой изменятся следующие свойства:
         </p>
         <ul>
            <li>Изменится содержимое блока на &quot;text&quot;</li>
            <li>высота и ширина станут равны 150 и 80 соответственно</li>
         </ul>
         <div
            className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
            style={{
               height: 40,
               width: 60,
               color: "white"
            }}
            ref={blockRef}
         >
            <small ref={smallRef}>Блок</small>
         </div>
         <button className="btn btn-primary mt-2" onClick={handleChange}>
            Change
         </button>
      </CollapseWrapper>
   );
};

export default UseRefExercise;
