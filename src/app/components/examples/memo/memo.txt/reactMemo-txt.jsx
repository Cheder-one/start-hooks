/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";

const Parent = () => {
   const [count, setCount] = useState(0);

   return (
      <div>
         <h2>Count: {count}</h2>
         <button
            className="btn btn-primary"
            onClick={() => setCount((c) => c + 1)}
         >
            +
         </button>
         <div>
            <Children />
         </div>
      </div>
   );
};

const Children = React.memo(() => {
   const renderCount = useRef(0);

   useEffect(() => {
      renderCount.current += 1;
      console.log("render");
   });

   return (
      <div className="mt-2 p-1 card d-inline-block">
         {JSON.stringify(renderCount)}
      </div>
   );
});

export default Parent;
