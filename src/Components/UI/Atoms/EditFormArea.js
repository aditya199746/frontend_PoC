import React, { forwardRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faArrows } from "@fortawesome/free-solid-svg-icons";

export const EditFormAreaStyle = styled.div`
  width: 100px;
  height: 20px;
  background-color: darkcyan;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  position: absolute;
  top: 24px;
  right: 135px;
`;
const EditFormArea = ({ handleClick, idx, handleDelete }) => {
  return (
    <EditFormAreaStyle>
      <span>
        <FontAwesomeIcon data-idx={idx} icon={faArrows} />
      </span>
      <span>
        <FontAwesomeIcon icon={faPencil} onClick={(e) => handleClick(e, idx)} />
      </span>
      <span>
        <FontAwesomeIcon
          data-idx={idx}
          icon={faTrash}
          onClick={(e) => handleDelete(e, idx)}
        />
      </span>
    </EditFormAreaStyle>
  );
};

export default EditFormArea;
