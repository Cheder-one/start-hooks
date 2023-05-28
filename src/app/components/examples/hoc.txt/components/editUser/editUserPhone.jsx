/* eslint-disable */
import React from "react";

const EditUserPhone = ({ value, onChange, onPhoneSave }) => {
   return (
      <div className="alert alert-success mt-2">
         <h4>Введите новый номер</h4>
         <div className="d-flex justify-content-between">
            <input
               className="w-100 me-2 form-control"
               value={value}
               onChange={onChange}
            />
            <button className="btn btn-primary" onClick={onPhoneSave}>
               Save
            </button>
         </div>
      </div>
   );
   /* eslint-disable */
};

export default EditUserPhone;
