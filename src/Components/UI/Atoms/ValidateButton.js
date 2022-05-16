import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const ButtonStyle = styled.button({
  backgroundColor: "white",
  color: "blue",
  width: "144px",
  height: "26px",
  border: "1px dashed white",
  borderRadius: "30px",
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "4px",
});
const Elements = ({ label, id }) => {
  return <ButtonStyle id={id}>{label}</ButtonStyle>;
};

Elements.propType = {
  label: PropTypes.string,
  id: PropTypes.string,
};
export default Elements;
