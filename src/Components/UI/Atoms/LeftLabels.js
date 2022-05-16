import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const LeftEleStyle = styled.div`
  color: white;

  white-space: nowrap;
  :nth-child(1) {
    marginleft: -66px;
  }
  :nth-child(1) {
    marginleft: -11px;
  }
`;
const LeftArea = (props) => {
  return <LeftEleStyle>{props.children}</LeftEleStyle>;
};

// LeftArea.propType = {
//   label: PropTypes.string,
//   id: PropTypes.string,
// };
export default LeftArea;
