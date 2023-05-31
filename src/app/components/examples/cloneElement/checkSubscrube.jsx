/* eslint-disable */
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const someText = faker.lorem.paragraphs(5);

const getTwoParagraphs = (text) => {
   const arrParagraphs = text.split(/\n/);
   return arrParagraphs.length > 2
      ? [
           arrParagraphs.slice(0, 2),
           "...",
           "Для продолжения оформите подписку"
        ].join("\n")
      : text;
};

const Text = ({ text }) => {
   return <p>{text}</p>;
};

const CheckSubscribe = () => {
   const [isSubscribe, setIsSubscribe] = useState(false);
   const myText = <Text text={someText} />;

   const availableText = React.cloneElement(myText, {
      text: isSubscribe
         ? myText.props.text
         : getTwoParagraphs(myText.props.text)
   });

   return (
      <div>
         {availableText}
         <button
            className="btn btn-primary"
            onClick={() => setIsSubscribe((s) => !s)}
         >
            Подписаться
         </button>
      </div>
   );
};

export default CheckSubscribe;
