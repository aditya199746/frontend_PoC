import React, { forwardRef } from "react";
import styled from "styled-components";
import EditFormArea from "../../../Containers/EditFormAreaContainer";
import ElementDivs from "./ElementDivs";

export const CheckBoxStyle = styled.input({
  backgroundColor: "lightgrey",
  marginTop: "30px",
  display: "block",
});
const CheckBox = ({ idx, label, key }) => {
  return (
    <ElementDivs key={key}>
      <>
        <label>{label}</label>
        <CheckBoxStyle type="checkbox" data-idx={idx}></CheckBoxStyle>
        <EditFormArea idx={idx} />
      </>
    </ElementDivs>
  );
};

export default CheckBox;
