import React, { forwardRef } from "react";
import styled from "styled-components";

const ElementDivsStyle = styled.div({
  position: "relative",
  marginTop: "5px",
  height: "120px",
});
const ElementDivs = (props) => {
  return <ElementDivsStyle>{props.children}</ElementDivsStyle>;
};

export default ElementDivs;
