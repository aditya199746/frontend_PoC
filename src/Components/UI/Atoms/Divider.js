import React, { forwardRef } from "react";
import styled from "styled-components";
import EditFormArea from "../../../Containers/EditFormAreaContainer";
import ElementDivs from "./ElementDivs";

export const DividerStyle = styled.div({
  width: "80%",
  height: "1px",
  backgroundColor: "lightgrey",
  marginTop: "30px",
});
const Divider = ({ idx, label, key }) => {
  return (
    <ElementDivs key={key}>
      <>
        <label>{label}</label>
        <DividerStyle data-idx={idx}></DividerStyle>
        <EditFormArea idx={idx} />
      </>
    </ElementDivs>
  );
};

export default Divider;
