import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LeftEleStyle = styled.div({
  backgroundColor: "#448fe1;",
  color: "white",
  width: "16%",
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});
const LeftArea = (props) => {
  return <LeftEleStyle>{props.children}</LeftEleStyle>;
};

// LeftArea.propType = {
//   label: PropTypes.string,
//   id: PropTypes.string,
// };
export default LeftArea;
