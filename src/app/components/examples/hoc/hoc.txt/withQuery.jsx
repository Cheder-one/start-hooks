import React, { useState } from "react";
import { fakeApiGetUser } from "./api/fake.api/users.api";

const withQuery = (Component) => {
    return ({ userGuid }) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            fakeApiGetUser();
        }, [userGuid]);

        return <></>;
    };
};

export default withQuery;
