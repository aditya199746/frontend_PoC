import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./style.css";

export const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: ;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(3) {
    left: 20%;
    top: 93%;
  }
  :nth-child(4) {
    left: 48%;
    top: 93%;
  }
`;
const Model = ({ saveModelArea, cancelModelArea }) => {
  let check = ["check_one", "check_two", "check_three"];
  let radio = ["radio_one", "radio_two", "radio_othree"];
  // const [dataVal, setDataVal] = useState({
  //   label: "",
  //   row: [],
  //   col: [],
  // });
  let dataRef = useRef({
    label: "",
    row: [],
    col: [],
  });

  const handleChange = (e) => {
    if (e.target.name === "label") {
      dataRef.current.label = e.target.value;
    } else if (e.target.name === "row") {
      for (let i = 0; i < e.target.value; i++) {
        dataRef.current.row.push("+");
      }
    } else if (e.target.name === "col") {
      for (let i = 0; i < e.target.value; i++) {
        dataRef.current.col.push("+");
      }
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveModelArea(dataRef.current);
  };
  return (
    <>
      <div className="wrapper">
        <form className="model-container">
          <h3>Tool Name</h3>
          <div>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="label">
              <label htmlFor="label">label</label>
              <input
                name="label"
                type="text"
                id="label"
                onChange={handleChange}
              />
            </div>
            <div className="option-1">
              <h3>Options</h3>
              {check.map((c, idx) => {
                return (
                  <>
                    <input type="checkbox" id={c} />
                    <label htmlFor={c}>Option {idx}</label>
                  </>
                );
              })}
            </div>
            <div className="table-container">
              <h3>Table</h3>
              <input
                type="number"
                name="row"
                onChange={handleChange}
                id="row"
              />
              <label htmlFor="row">Row</label>

              <input
                type="number"
                name="col"
                id="col"
                onChange={handleChange}
              />
              <label htmlFor="col">Col</label>
            </div>
            <div className="option-2">
              <h3>Options</h3>
              {radio.map((r, idx) => {
                return (
                  <>
                    <input type="radio" id={r} key={`input${idx}`} />
                    <label htmlFor={r} key={`label${idx}`}>
                      Option {idx}
                    </label>
                  </>
                );
              })}
            </div>
          </div>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={cancelModelArea}>Cancel</Button>
        </form>
      </div>
    </>
  );
};

export default Model;
