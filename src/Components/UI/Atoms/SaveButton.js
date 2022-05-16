import React, { forwardRef } from "react";
import styled from "styled-components";

const SaveButtonStyle = styled.button({
  width: "144px",
  height: "26px",
  backgroundColor: "#448fe1;",
  color: "white",
  marginTop: "30px",
  position: "absolute",
  bottom: "24px",
  alignItems: "center",
  left: "50%",
});
const SaveButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <SaveButtonStyle type="submit" onClick={handleClick}>
      Save
    </SaveButtonStyle>
  );
};

export default SaveButton;
