import React, { forwardRef } from "react";
import styled from "styled-components";
import EditFormArea from "../../../Containers/EditFormAreaContainer";
import ElementDivs from "./ElementDivs";

const TextStyle = styled.input({
  width: "80%",
  height: "10px",
  backgroundColor: "lightgrey",
  marginTop: "30px",
});
const Text = ({ idx, label, key }) => {
  return (
    <ElementDivs key={key}>
      <>
        <label>{label}</label>
        <TextStyle type="text" data-idx={idx}></TextStyle>
        <EditFormArea idx={idx} />
      </>
    </ElementDivs>
  );
};

export default Text;
