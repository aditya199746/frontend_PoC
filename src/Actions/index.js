import data from "../data";

export const SET_DRAGGABLE_VALUE = "SET_DRAGGABLE_VALUE";
export const UPDATE_DROP_ZONE = "UPDATE_DROP_ZONE";
export const SET_ITEMS_MATCHED = "SET_ITEMS_MATCHED";
export const MOVE_ITEM = "MOVE_ITEM";
export const SAVED_FORM = "SAVED_FORM";
export const SET_UPDATE_MATCHED_ITEMS = "SET_UPDATE_MATCHED_ITEMS";
export const SET_SHOW_FORM = "SET_SHOW_FORM";
export const SET_FORM_DATA = "SET_FORM_DATA";
export const SET_UPDATE_SAVE_FORM = "SET_UPDATE_SAVE_FORM";
export const SHOW_MODEL = "SHOW_MODEL";
export const FORM_NEW_DATA = "FORM_NEW_DATA";
export const SET_FORM_IDX = "SET_FORM_IDX";
export const SET_DELETE_MATCHED_ITEMS = "SET_DELETE_MATCHED_ITEMS";

export const setDeleteMatchedItems = (idx) => {
  return {
    type: SET_DELETE_MATCHED_ITEMS,
    idx,
  };
};
export const setFormIdx = (idx) => ({
  type: SET_FORM_IDX,
  idx,
});
export const setDraggableValue = (dragValue) => ({
  dragValue,
  type: SET_DRAGGABLE_VALUE,
});

export const setUpdateDropZone = (list) => ({
  type: UPDATE_DROP_ZONE,
  list,
});

export const itemsMatched = (drag, drop) => ({
  drag,
  drop,
  type: SET_ITEMS_MATCHED,
});

export const setMoveItem = (from, to) => {
  return {
    type: MOVE_ITEM,
    from,
    to,
  };
};

export const setSaveForm = (list) => {
  return {
    type: SAVED_FORM,
    list,
  };
};

export const setFormData = (data) => {
  return {
    type: SET_FORM_DATA,
    data,
  };
};

export const setUpdateMatchedItem = (updateList) => {
  return {
    type: SET_UPDATE_MATCHED_ITEMS,
    updateList,
  };
};

export const setShowForm = (bool) => {
  return {
    type: SET_SHOW_FORM,
    bool,
  };
};

export const setShowModel = (bool) => {
  return {
    type: SHOW_MODEL,
    bool,
  };
};

export const setUpdateSavedFormData = (newData) => {
  return {
    type: SET_UPDATE_SAVE_FORM,
    newData,
  };
};

export const setEditFormData = (data) => ({
  type: FORM_NEW_DATA,
  data,
});

export const thunks = {
  onDrop: (dropzone) => (dispatch, getState) => {
    let { setDraggable: dragItem } = getState();

    if (dragItem?.id !== undefined) {
      let drags = {
        ...dragItem,
        row: ["+"],
        col: ["+"],
      };

      dispatch(itemsMatched(drags, dropzone));
    }
    dispatch(setDraggableValue(null));
  },
  updateDropZone: (from, to) => (dispatch, getState) => {
    const { matchedItems } = getState();

    if (from === to) {
      return matchedItems;
    }
    var fromVal = matchedItems[from];

    const _matchedItems = matchedItems;

    _matchedItems.splice(from, 1);

    _matchedItems.splice(to, 0, fromVal);

    dispatch(setUpdateDropZone(_matchedItems));
  },
  handleSaveForm: () => (dispatch, getState) => {
    const { matchedItems, showForm } = getState();

    let _matchedItems = [...matchedItems];
    dispatch(setSaveForm(_matchedItems));

    dispatch(setUpdateDropZone(""));
  },
  handlePlus: (e) => (dispatch, getState) => {
    const { matchedItems } = getState();
    e.preventDefault();
    let _matchedItems = matchedItems.map((mi, idx) => {
      if (idx == e.target.dataset.str) {
        if (e.target.dataset.id === "row") {
          mi.drag.row.push("+");
        } else if (e.target.dataset.id === "col") {
          mi.drag.col.push("+");
        }

        return mi;
      } else {
        return mi;
      }
    });

    dispatch(setUpdateMatchedItem(_matchedItems));
  },
  handleMinus: (e) => (dispatch, getState) => {
    const { matchedItems } = getState();
    e.preventDefault();
    let _matchedItems = matchedItems.map((mi, idx) => {
      if (idx == e.target.dataset.str) {
        if (e.target.dataset.id === "row") {
          mi.drag.row.pop();
        } else if (e.target.dataset.id === "col") {
          mi.drag.col.pop();
        }

        return mi;
      } else {
        return mi;
      }
    });

    dispatch(setUpdateMatchedItem(_matchedItems));
  },
  showForm: (e) => (dispatch, getState) => {
    const { savedForms } = getState();
    dispatch(setFormIdx(e.target.dataset.idx));
    dispatch(setShowForm(true));

    let form = savedForms.filter((s, idx) => {
      if (idx == e.target.dataset.idx) {
        return s;
      } else return;
    });

    dispatch(setFormData(form));
  },

  handleEditArea: (idx) => (dispatch, getState) => {
    dispatch(setShowModel(true));
    let _data = {
      idx: idx,
    };

    dispatch(setEditFormData(_data));
  },

  saveModelArea: (data) => (dispatch, getState) => {
    const {
      formNewData,
      matchedItems,
      showForm,
      formData,
      savedForms,
      formIdx,
    } = getState();
    let newData = {
      ...formNewData,
      ...data,
    };

    if (showForm) {
      let newMatched = savedForms.map((sf, idx) => {
        if (idx == formIdx) {
          sf.form.map((m, idx2) => {
            if (idx2 == newData.idx) {
              if (newData.col.length > 0) {
                m.drag.col = newData.col;
              }
              if (newData.row.length > 0) {
                m.drag.row = newData.row;
              }
              if (newData.label != "") {
                m.drag.label = newData.label;
              }
            }
            return m;
          });
        }
        return sf;
      });

      dispatch(setUpdateSavedFormData(newMatched));
      dispatch(setFormData(newMatched));
    } else {
      let newMatched = matchedItems.map((m, idx) => {
        if (idx == newData.idx) {
          if (newData.col.length > 0) {
            m.drag.col = newData.col;
          }
          if (newData.row.length) {
            m.drag.row = newData.row;
          }
          if (newData.label != "") {
            m.drag.label = newData.label;
          }
        }
        return m;
      });
      dispatch(setUpdateDropZone(newMatched));
    }

    dispatch(setShowModel(false));
  },

  deleteMatchedItems: (e, idx) => (dispatch, getState) => {
    const { matchedItems, showForm, savedForms, formIdx } = getState();
    e.preventDefault();
    if (!showForm) {
      let newArr = matchedItems.filter((m, index) => {
        if (idx != index) {
          return m;
        } else {
          return;
        }
      });
      dispatch(setUpdateMatchedItem(newArr));
    }
  },
};
