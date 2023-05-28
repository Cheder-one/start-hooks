/* eslint-disable */
import React from "react";
import withQuery from "./withQuery";
import UserMeta from "./userMeta";
import CardWrapper from "../../../common/Card";

const UserMetaWithQuery = withQuery(UserMeta);

const ParentComponent = () => {
   return (
      <div>
         <p>Пользователь:</p>
         <CardWrapper>
            <UserMetaWithQuery userGuid="userGuid_0" />
         </CardWrapper>
      </div>
   );
};

export default ParentComponent;
