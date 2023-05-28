/* eslint-disable */
import React from "react";

const UserEditBtn = ({ onClick }) => {
   return (
      <div className="d-flex justify-content-end mt-2">
         <button className="btn btn-primary" onClick={onClick}>
            Edit phone
         </button>
      </div>
   );
};

export default UserEditBtn;
