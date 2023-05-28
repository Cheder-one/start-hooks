/* eslint-disable */
import React from "react";
import withQuery from "./withQuery";
import UserMeta from "./userMeta";
import UserEditBtn from "./editUser/userEditBtn";
import EditUserPhone from "./editUser/editUserPhone";

const UserMetaWithQuery = withQuery(UserMeta);

const ParentComponent = () => {
   return (
      <>
         <p>Пользователь:</p>
         <UserMetaWithQuery userGuid="userGuid_0" />
         <EditUserPhone />
         <UserEditBtn />
      </>
   );
};

export default ParentComponent;
