import React, { forwardRef } from "react";
import styled from "styled-components";
import EditFormArea from "../../../Containers/EditFormAreaContainer";
import ElementDivs from "./ElementDivs";

export const InputStyle = styled.input({
  width: "80%",

  backgroundColor: "lightgrey",
  marginTop: "30px",
});
const Input = ({ idx, label, key }) => {
  return (
    <ElementDivs key={key}>
      <>
        <label>{label}</label>
        <InputStyle type="text" data-idx={idx}></InputStyle>
        <EditFormArea idx={idx} />
      </>
    </ElementDivs>
  );
};

export default Input;
