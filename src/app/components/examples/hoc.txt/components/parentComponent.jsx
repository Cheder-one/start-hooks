/* eslint-disable */
import React from "react";
import withQuery from "./withQuery";
import UserMeta from "./userMeta";
import withEditUserPhone from "./editUser/withEditUserPhone";

const UserMetaWithQuery = withQuery(UserMeta);
const UserMetaWithEditUserPhone = withQuery(withEditUserPhone(UserMeta));

const ParentComponent = () => {
   return (
      <>
         <p>Пользователи:</p>
         <UserMetaWithQuery userGuid="userGuid_0" />
         <br />
         <UserMetaWithEditUserPhone userGuid="userGuid_5" />
      </>
   );
};

export default ParentComponent;
