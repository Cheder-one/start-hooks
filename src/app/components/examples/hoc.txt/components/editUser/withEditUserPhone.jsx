/* eslint-disable */
import React, { useEffect, useState } from "react";
import EditUserPhone from "./editUserPhone";
import UserEditBtn from "./userEditBtn";

const withEditUserPhone = (Component) => {
   return (props) => {
      const [isEdit, setIsEdit] = useState(false);
      const [phone, setPhone] = useState(props.phone);
      const [inputData, setInputData] = useState({ phone: props.phone });

      useEffect(() => {
         setPhone(props.phone);
         setInputData((prev) => ({
            ...prev,
            phone
         }));
      }, [props.phone]);

      const handleToggleEdit = () => {
         setIsEdit((prevEdit) => !prevEdit);
      };

      const handleInputChange = ({ target }) => {
         const isValidPhone = /^[^a-zA-Zа-яА-Я]+$/.test(target.value);

         if (isValidPhone) {
            setPhone(target.value);
         }
      };

      const handlePhoneSave = () => {
         setInputData((prev) => ({
            ...prev,
            phone
         }));
         handleToggleEdit();
      };

      return (
         <>
            <Component {...props} phone={inputData.phone} />
            {isEdit ? (
               <EditUserPhone
                  value={phone}
                  onChange={handleInputChange}
                  onPhoneSave={handlePhoneSave}
               />
            ) : (
               <UserEditBtn onClick={handleToggleEdit} />
            )}
         </>
      );
   };
};

export default withEditUserPhone;
