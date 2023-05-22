/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");

    useEffect(() => {
        prevState.current++;
    });

    const handleChange = () => {
        setOtherState((prev) => (prev === "false" ? "true" : "false"));
    };

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>{`Render count: ${prevState.current}`}</p>
            <button className="btn btn-primary" onClick={handleChange}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
