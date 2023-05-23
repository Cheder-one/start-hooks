/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const smallRef = useRef();
    console.log(blockRef.current);
    console.log(smallRef.current);

    const [blockStyle, setBlockStyle] = useState({
        height: 40,
        width: 60,
        color: "white"
    });

    const handleChange = () => {
        setBlockStyle((prev) => ({
            height: 150,
            width: 80,
            ...prev
        }));
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={blockStyle}
                ref={blockRef}
            >
                <small ref={smallRef}>Блок</small>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleChange}>
                Change
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
