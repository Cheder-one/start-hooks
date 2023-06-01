/* eslint-disable */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";

const FormComponent = ({ children }) => {
   const [data, setData] = useState({});

   const handleChange = (target) => {
      setData((prev) => ({ ...prev, [target.name]: target.value }));
   };

   return React.Children.map(children, (child) => {
      return React.cloneElement(child, { onChange: handleChange });
   });
};

FormComponent.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ])
};

const ReactChildrenExample = () => {
   return (
      <CardWrapper>
         <SmallTitle>Clone form and add props</SmallTitle>
         <hr />
         <FormComponent>
            <TextField name="email" label="Email" />
            <TextField name="password" label="Password" type="password" />
         </FormComponent>
      </CardWrapper>
   );
};

export default ReactChildrenExample;
