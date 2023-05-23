import React, { useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function myLoop(n) {
    console.time("Выполнялось: ");
    let i = 0;
    do {
        i++;
    } while (i !== n);
    console.timeEnd("Выполнялось: ");
    return i;
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(1_000_000_000);

    const computedResult = useMemo(() => myLoop(value), [value]);
    const [anotherState, setAnotherState] = useState(1);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <hr />
                <div>
                    Вычисленный результат: <b>{computedResult}</b>
                    <p>
                        value: <b>{value}</b>
                    </p>
                </div>
                <div>
                    <div>
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => setValue((v) => v + 1000)}
                        >
                            Increment
                        </button>
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => setValue((v) => v - 1000)}
                        >
                            Decrement
                        </button>
                    </div>
                    <div className="mt-2">
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => setAnotherState((p) => p + 1)}
                        >
                            Обновить state
                        </button>
                        {anotherState}
                    </div>
                </div>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
