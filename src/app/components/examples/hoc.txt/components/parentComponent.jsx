/* eslint-disable */
import React from "react";
import withQuery from "./withQuery";
import UserMeta from "./userMeta";

const UserMetaWithQuery = withQuery(UserMeta);

const ParentComponent = () => {
    return (
        <div>
            <h4>Parent Component</h4>
            <UserMetaWithQuery userGuid="userGuid_0" />
        </div>
    );
};

export default ParentComponent;
