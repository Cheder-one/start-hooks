import React from "react";
import Component from "./someComponent";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";
import ParentComponent from "../hoc.txt/components/parentComponent";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropsStyles = withPropsStyles(Component);
    const OptionalComponent = withPropsStyles(ComponentWithAuth);

    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <hr />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <hr />
                <ComponentWithPropsStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <hr />
                <OptionalComponent />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>HOC.txt</SmallTitle>
                <hr />
                <ParentComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
