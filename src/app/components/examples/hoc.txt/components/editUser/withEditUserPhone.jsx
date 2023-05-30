/* eslint-disable */
import React, { useEffect, useState } from "react";
import EditUserPhone from "./editUserPhone";
import UserEditBtn from "./userEditBtn";
import { updateUser } from "../../api/fake.api/users.api";

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
         updateUser(props.userGuid, { phone: phone }).then((res) =>
            setInputData((prev) => ({
               ...prev,
               ...res
            }))
         );

         handleToggleEdit();
      };

      const handleEnterUp = (e) => {
         if (e.key === "Enter") {
            handlePhoneSave();
         }
      };

      return (
         <>
            <Component {...props} phone={inputData.phone} />
            {isEdit ? (
               <EditUserPhone
                  value={phone}
                  onChange={handleInputChange}
                  onPhoneSave={handlePhoneSave}
                  onEnterUp={handleEnterUp}
               />
            ) : (
               <UserEditBtn onClick={handleToggleEdit} />
            )}
         </>
      );
   };
};

export default withEditUserPhone;
