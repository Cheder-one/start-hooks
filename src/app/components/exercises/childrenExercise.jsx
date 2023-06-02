/* eslint-disable */
import React from "react";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {
   return (
      <CollapseWrapper title="Упражнение">
         <p className="mt-3">
            У вас есть компоненты Списка. Вам необходимо к каждому из них
            добавить порядковый номер, относительно того, как они располагаются
            на странице. Вы можете использовать как{" "}
            <code>React.Children.map</code> так и{" "}
            <code>React.Children.toArray</code>
         </p>

         <ListComponent>
            <Component />
            <Component />
            <Component />
         </ListComponent>
      </CollapseWrapper>
   );
};

const ListComponent = ({ children }) => {
   const childrenArray = React.Children.toArray(children);
   return (
      <div>
         {childrenArray.map((child, i) => React.cloneElement(child, { i }))}
      </div>
   );
};

const Component = ({ i }) => {
   return <div>Компонент списка {i}</div>;
};

export default ChildrenExercise;
