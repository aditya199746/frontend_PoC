import React, { forwardRef } from "react";
import styled from "styled-components";
import EditFormArea from "../../../Containers/EditFormAreaContainer";
import ElementDivs from "./ElementDivs";

export const FileUploadStyle = styled.div({
  height: "5px",
  width: "80%",
  backgroundColor: "lightgrey",
  marginTop: "30px",
});
const FileUpload = ({ idx, label, key }) => {
  return (
    <ElementDivs key={key}>
      <>
        <label>{label}</label>
        <FileUploadStyle type="checkbox" data-idx={idx}></FileUploadStyle>
        <EditFormArea idx={idx} />
      </>
    </ElementDivs>
  );
};

export default FileUpload;
