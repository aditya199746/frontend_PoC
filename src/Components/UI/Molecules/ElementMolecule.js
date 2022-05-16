import React, { useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";
import LeftAreaContainer from "../../../Containers/LeftAreaContainer";
import Elements from "../../../Containers/SingleElementContainer";
import LeftLabel from "../Atoms/LeftLabels";
import ButtonContainer from "../../../Containers/ButtonContainer";
import EditFormArea from "../Atoms/EditFormArea";

const StyleDivStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  width: auto;
  :nth-child(2) {
    height: 90px;
  }
  :nth-child(3) {
    height: 240px;
  }
`;

const DragDivStyle = styled.div`
  height: 201px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SectionStyle = styled.section`
  height: 90px;
  margin-top: 15px;
  width: 100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: lightgrey;
  position: relative;
`;
const SectionTwoStyle = styled.section`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AddButtonStyle = styled.section`
  border: none;
  background: no-repeat;
  position: absolute;
  left: 148px;
  height: 20px;
  width: 20px;
  font-weight: 900;
  font-size: x-large;
  display: flex;
  align-items: center;
  color: black;
`;
const ElementMolecule = ({ data, forms, displayForm, addForm }) => {
  const cellLayout = data.cellLayout;
  const formLayout = data.leftElements;

  return (
    <LeftAreaContainer>
      <>
        {forms.length ? (
          <SectionStyle>
            <AddButtonStyle onClick={addForm}>+</AddButtonStyle>
            {forms.map((form, idx) => {
              return (
                <div
                  key={`form${idx}`}
                  onClick={(e) => displayForm(e)}
                  data-idx={idx}
                  style={{ marginTop: "4px" }}
                >{`Form${idx + 1}`}</div>
              );
            })}
          </SectionStyle>
        ) : null}

        <SectionTwoStyle>
          <div>
            <ButtonContainer id="validate" label="Validate"></ButtonContainer>
          </div>
          <StyleDivStyle>
            <LeftLabel>Cell Layout</LeftLabel>
            <DragDivStyle className="drag">
              {cellLayout.map((ele) => {
                return (
                  <div key={`cell${ele}`}>
                    <Elements id={ele.id} label={ele.text} />
                  </div>
                );
              })}
            </DragDivStyle>
          </StyleDivStyle>
          <StyleDivStyle>
            <LeftLabel>Form Components</LeftLabel>
            <DragDivStyle>
              {formLayout.map((ele) => {
                return (
                  <div key={`lay${ele.id}`}>
                    <Elements id={ele.id} label={ele.text} />
                  </div>
                );
              })}
            </DragDivStyle>
          </StyleDivStyle>
        </SectionTwoStyle>
      </>
    </LeftAreaContainer>
  );
};

export default ElementMolecule;
