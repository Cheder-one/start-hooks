/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);

    useEffect(() => {
        renderCount.current++;
    });

    const handleChange = () => {
        setOtherState((prev) => !prev);
    };

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>{`Render count: ${renderCount.current}`}</p>
            <button className="btn btn-primary" onClick={handleChange}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
