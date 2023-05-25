/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";

// Имитация API
const myFakeApi = ({ id, param }) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                param,
                item: [1, 2, 3, 4, 5]
            });
        }, 1000);
    });
};

// Параметры, которые будем менять
const mockParam1 = { id: 1, param: 2 };
const mockParam2 = { id: 2, param: 3 };

export const Parent = () => {
    const [childProps, setChildProps] = useState(mockParam1);

    const handleChangeProps = () => {
        if (childProps === mockParam1) {
            setChildProps(mockParam2);
        } else {
            setChildProps(mockParam1);
        }
    };

    return (
        <div>
            <button onClick={handleChangeProps}>Обновить</button>
            <hr />
            <Child {...childProps} />
        </div>
    );
};

const Child = ({ id, param }) => {
    const [values, setValues] = useState(null);

    const handleRequest = useCallback(() => {
        setValues(null);

        const requestParam = {
            id,
            param
        };

        myFakeApi(requestParam).then((r) => setValues(r));
    }, [id, param]);

    useEffect(() => {
        console.log("Request");
        handleRequest();
    }, [handleRequest]);

    return (
        <div>
            {values ? (
                <pre>{JSON.stringify(values, null, 2)}</pre>
            ) : (
                <div>Загрузка...</div>
            )}
        </div>
    );
};

Child.propTypes = {
    id: PropTypes.number.isRequired,
    param: PropTypes.number.isRequired
};
