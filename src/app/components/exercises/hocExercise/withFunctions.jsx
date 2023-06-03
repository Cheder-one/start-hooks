import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => {
   return (props) => {
      const [isAuth, setIsAuth] = useState(!!localStorage.getItem("auth"));

      const toggleAuth = () => {
         setIsAuth((prev) => !prev);
      };

      const handleLogin = () => {
         localStorage.setItem("auth", "token");
         toggleAuth();
      };

      const handleLogOut = () => {
         localStorage.removeItem("auth");
         toggleAuth();
      };

      return (
         <CardWrapper>
            <Component
               {...props}
               onLogin={handleLogin}
               onLogOut={handleLogOut}
               isAuth={isAuth}
            />
         </CardWrapper>
      );
   };
};

export default withFunctions;
