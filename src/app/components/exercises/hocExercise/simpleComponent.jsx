import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth, label }) => {
   return (
      <>
         {label && <h3>{label}</h3>}
         {!isAuth ? (
            <button className="btn btn-primary" onClick={onLogin}>
               Войти
            </button>
         ) : (
            <button className="btn btn-primary" onClick={onLogOut}>
               Выйти из системы
            </button>
         )}
      </>
   );
};

SimpleComponent.propTypes = {
   onLogin: PropTypes.func.isRequired,
   onLogOut: PropTypes.func.isRequired,
   isAuth: PropTypes.bool.isRequired,
   label: PropTypes.string
};

export default SimpleComponent;
