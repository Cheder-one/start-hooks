/* eslint-disable */
import React, { useCallback, useEffect, useMemo, useState } from "react";

const Parent = () => {
   const [count, setCount] = useState(0);

   const user = useMemo(
      () => ({
         name: "Sarah Sullivan",
         phone: "1-976-631-1449",
         email: "fringilla.purus.mauris@protonmail.com",
         address: "2660 Frangible Av."
      }),
      []
   );

   const handleCount = useCallback(() => {
      setCount((c) => c + 1);
   }, []);

   return (
      <div>
         <h2>Count: {count}</h2>

         <div>
            <Children user={user} onIncrement={handleCount} />
         </div>
      </div>
   );
};

const Children = React.memo(({ user, onIncrement }) => {
   useEffect(() => {
      console.log("Children rerender");
   });

   return (
      <div className="mt-2 p-1 card d-inline-block">
         {user.name}
         <button className="btn btn-primary ms-2 btn-sm" onClick={onIncrement}>
            +
         </button>
      </div>
   );
});

export default Parent;
