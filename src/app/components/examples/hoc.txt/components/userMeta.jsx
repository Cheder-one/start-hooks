import React from "react";
import PropTypes from "prop-types";

// Обычный переиспользуемый Компонент
const UserMeta = ({ name, email, phone }) => {
   return (
      <div className="card">
         <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <div className="card-text">
               Email: {email}
               <br />
               Tel.: {phone}
            </div>
         </div>
      </div>
   );
};

UserMeta.propTypes = {
   name: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired
};

export default UserMeta;
