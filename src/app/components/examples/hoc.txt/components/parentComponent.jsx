/* eslint-disable */
import React from "react";
import withQuery from "./withQuery";
import UserMeta from "./userMeta";
import CardWrapper from "../../../common/Card";

const UserMetaWithQuery = withQuery(UserMeta);

const ParentComponent = () => {
   return (
      <>
         <p>Пользователь:</p>
         <UserMetaWithQuery userGuid="userGuid_0" />
      </>
   );
};

export default ParentComponent;
