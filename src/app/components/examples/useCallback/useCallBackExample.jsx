/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
   const [data, setData] = useState({});
   const withOutCallback = useRef(0);
   const withCallback = useRef(0);

   const handleChange = ({ target }) => {
      setData((prev) => ({ ...prev, [target.name]: target.value }));
   };

   const validateWithOutCallback = (data) => {
      console.log(data);
   };

   const validateWithCallback = useCallback((data) => {
      console.log(data);
   }, []);

   useEffect(() => {
      validateWithOutCallback(data);
      validateWithCallback(data);
   }, [data]);

   useEffect(() => {
      withOutCallback.current++;
   }, [validateWithOutCallback]);

   useEffect(() => {
      withCallback.current++;
   }, [validateWithCallback]);

   return (
      <CardWrapper>
         <SmallTitle>Example</SmallTitle>
         <hr />
         <p>Render withOut Callback: {withOutCallback.current}</p>
         <p>Render with Callback: {withCallback.current}</p>
         <label htmlFor="email" className="form-label">
            Email
         </label>
         <input
            id="email"
            name="email"
            value={data.email}
            type="email"
            className="form-control"
            onChange={handleChange}
         />
      </CardWrapper>
   );
};

export default UseCallBackExample;
