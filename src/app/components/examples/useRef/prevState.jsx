/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [currentState, setCurrentState] = useState("false");

    useEffect(() => {
        prevState.current = currentState;
    }, [currentState]);

    const handleChange = () => {
        setCurrentState((prev) => (prev === "false" ? "true" : "false"));
    };

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <hr />
            <p>{`prevState: ${prevState.current}`}</p>
            <p>{`currentState: ${currentState}`}</p>
            <button className="btn btn-primary" onClick={handleChange}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
