import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const prevInputDiv = inputRef.current;
    const handleClick = () => {
        prevInputDiv.focus();
        console.log(prevInputDiv);
    };

    const handleClickWidth = () => {
        prevInputDiv.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <hr />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                id="email"
                type="email"
                className="form-control"
            />
            <div className="d-flex gap-2 mt-2">
                <button className="btn btn-primary" onClick={handleClick}>
                    Фокус Input
                </button>
                <button className="btn btn-primary" onClick={handleClickWidth}>
                    Изменить Ширину
                </button>
            </div>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
