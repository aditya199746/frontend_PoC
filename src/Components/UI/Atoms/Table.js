import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import EditFormArea from "../../../Containers/EditFormAreaContainer";
import ElementDivs from "./ElementDivs";

const TableStyle = styled.table`
  width: 80%;
  height: 60px;
  background-color: lightgrey;
  margin-top: 30px;
  position: relative;
  top: -24px;

  table {
    border: 1px solid black;
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
  }
`;

const GrowButtonStyle = styled.div`
  :nth-child(4) {
    position: absolute;
    left: 748px;
    top: 46px;
    display: flex;
    flex-direction: column;
  }
  :nth-child(5) {
    position: absolute;
    left: 50%;
    top: 88px;
  }
`;
const Table = ({ idx, onPlus, onMinus, row, col, label, showForm, key }) => {
  return (
    <ElementDivs>
      <>
        <label>{label}</label>
        <TableStyle data-idx={idx}>
          <tbody>
            {col.map((col, index) => {
              return (
                <tr key={`tr${index}`}>
                  {row.map((ro) => {
                    return <td key={`td${index}`}></td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </TableStyle>
        <EditFormArea idx={idx} />
        {!showForm ? (
          <>
            <GrowButtonStyle>
              <button data-id="row" data-str={idx} onClick={(e) => onMinus(e)}>
                -
              </button>
              <button data-id="row" data-str={idx} onClick={(e) => onPlus(e)}>
                +
              </button>
            </GrowButtonStyle>
            <GrowButtonStyle>
              <button data-id="col" data-str={idx} onClick={(e) => onMinus(e)}>
                -
              </button>
              <button data-id="col" data-str={idx} onClick={(e) => onPlus(e)}>
                +
              </button>
            </GrowButtonStyle>
          </>
        ) : null}
      </>
    </ElementDivs>
  );
};

export default Table;
