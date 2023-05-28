import React, { useState } from "react";
import { fakeApiGetUser } from "../api/fake.api/users.api";

// Компонент Высшего Порядка
const withQuery = (Component) => {
    return ({ userGuid }) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            fakeApiGetUser(userGuid).then((r) => {
                setUser(r);
            });
        }, [userGuid]);

        return <>{user ? <Component {...user} /> : <div>Загрузка...</div>}</>;
    };
};

export default withQuery;
