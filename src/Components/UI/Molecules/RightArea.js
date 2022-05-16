import React, { useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import Divider from "../Atoms/Divider";
import Table from "../../../Containers/TableContainer";
import Input from "../Atoms/Input";
import CheckBox from "../Atoms/CheckBox";
import FileUpload from "../Atoms/FileUpload";
import Text from "../Atoms/Text";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import SaveButtonContainer from "../../../Containers/SaveButtonContainer";

const RightEleStyle = styled.div({
  color: "white",
  width: "calc(100% - 16%)",
  height: "100%",
});
const RightArea = ({
  onDrop,
  matchedItem,
  setUpdateDropZone,
  onClick,
  showForm,
  formData,
}) => {
  let arr = !showForm ? matchedItem : formData[0].form;

  const dropRef = useRef();
  const sortRef = useRef();

  useEffect(() => {
    if (!showForm) {
      if (dropRef) {
        const drop = dropRef.current;

        $(drop)
          .droppable({
            tolerance: "pointer",

            drop: (event, ui) => {
              const { dataset } = event.target;
              onDrop({ ...dataset });
            },
          })
          .droppable("enable");
      }
    }
  }, [matchedItem, showForm]);

  useEffect(() => {
    if (!showForm) {
      if (sortRef) {
        const sort = sortRef.current;

        $(sort).sortable({
          stop: (event, ui) => {
            var to = ui.item.index();
            $(sort).sortable("cancel");
            var from = ui.item.index();

            setUpdateDropZone(from, to);
          },
        });
      }
    }
  }, [matchedItem, showForm]);

  return (
    <RightEleStyle ref={dropRef}>
      <>
        <form ref={sortRef}>
          {arr.map((items, idx) => {
            return (
              <React.Fragment>
                {items.drag.id == "table" ? (
                  <Table
                    idx={idx}
                    row={items.drag.row}
                    label={items.drag.label}
                    col={items.drag.col}
                    key={`table${idx}`}
                  />
                ) : items.drag.id === "input" ? (
                  <Input idx={idx} label={items.drag.label} key={`in${idx}`} />
                ) : items.drag.id === "checkbox" ? (
                  <CheckBox
                    idx={idx}
                    label={items.drag.label}
                    key={`check${idx}`}
                  />
                ) : items.drag.id === "file_uploade" ? (
                  <FileUpload
                    idx={idx}
                    label={items.drag.label}
                    key={`file${idx}`}
                  />
                ) : items.drag.id === "text" ? (
                  <Text idx={idx} label={items.drag.label} key={`text${idx}`} />
                ) : items.drag.id === "divider" ? (
                  <Divider
                    idx={idx}
                    label={items.drag.label}
                    key={`divider${idx}`}
                  />
                ) : null}
              </React.Fragment>
            );
          })}
          {showForm ? null : <SaveButtonContainer />}
        </form>
      </>
    </RightEleStyle>
  );
};

// LeftArea.propType = {
//   label: PropTypes.string,
//   id: PropTypes.string,
// };
export default RightArea;
