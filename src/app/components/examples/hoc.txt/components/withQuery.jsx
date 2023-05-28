/* eslint-disable */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeApiGetUser } from "../api/fake.api/users.api";

// Компонент Высшего Порядка
const withQuery = (Component) => {
   return ({ userGuid }) => {
      const [user, setUser] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
         fakeApiGetUser(userGuid)
            .then((r) => {
               setUser(r);
            })
            .catch((e) => {
               setError(e.message);
            });
      }, [userGuid]);

      if (error) {
         return <div>{error}</div>;
      }

      return <>{user ? <Component {...user} /> : <div>Загрузка...</div>}</>;
   };
};

withQuery.propTypes = {
   userGuid: PropTypes.string.isRequired
};

export default withQuery;
