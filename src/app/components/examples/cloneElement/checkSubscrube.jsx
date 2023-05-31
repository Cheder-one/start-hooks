/* eslint-disable */
import React from "react";
import { faker } from "@faker-js/faker";

const Text = ({ text }) => {
   return <p>{text}</p>;
};

const getTwoParagraphs = (text) => {
   console.log(text);
   const arrParagraphs = text.split(/\n/);
   console.log(arrParagraphs);
};

const CheckSubscribe = () => {
   const someText = faker.lorem.paragraphs(5);
   const myText = <Text text={someText} />;

   getTwoParagraphs(myText.props.text);
   return <div>CheckSubscribe</div>;
};

export default CheckSubscribe;
