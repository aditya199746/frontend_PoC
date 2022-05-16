import React, { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

const ElementsStyle = styled.div({
  backgroundColor: "#448fe1;",
  color: "white",
  width: "144px",
  height: "26px",
  border: "1px dashed white",
  borderRadius: "30px",
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Elements = ({ label, id, setDraggableValue }) => {
  const dragRef = React.createRef();

  useEffect(() => {
    if (dragRef.current) {
      const draggable = dragRef.current;

      $(draggable)
        .draggable({
          helper: "clone",

          containment: ".leftRight",

          revert: (dropzone) => {
            if (!dropzone) {
              setDraggableValue(null);
            }

            return !dropzone;
          },

          start: (event, ui) => {
            let { dataset } = event.target;

            setDraggableValue({ ...dataset });
          },
        })
        .draggable("enable");
    }
  }, []);

  return (
    <ElementsStyle
      data-id={id}
      data-label={label}
      ref={dragRef}
      className="drag-box"
    >
      {label}
    </ElementsStyle>
  );
};

Elements.propType = {
  label: PropTypes.string,
  id: PropTypes.string,
};
export default Elements;
