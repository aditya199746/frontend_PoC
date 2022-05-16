import React from "react";
import styled from "styled-components";

import LeftAreaLayout from "../../Containers/LeftAreaLayoutContainer";
import RightAreaContainer from "../../Containers/RightAreaContainer";
import Model from "../../Containers/ModelContainer";

export const OutlineStyle = styled.div({
  background: "antiquewhite",
  width: "1100px",
  height: "90vh",
  alignSelf: "center",
  marginLeft: "24px",
  marginTop: "24px",
  marginRight: "24px",
  border: "2px solid lightgrey",
  display: "flex",
});
const Index = ({ data, showModel }) => {
  return (
    <OutlineStyle className="leftRight">
      <LeftAreaLayout />
      <RightAreaContainer />
      {showModel ? <Model /> : null}
    </OutlineStyle>
  );
};

export default Index;
