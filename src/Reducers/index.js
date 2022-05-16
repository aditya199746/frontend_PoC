import { combineReducers } from "redux";
import * as actions from "../Actions";
import deepClone from "lodash.clonedeep";
import _ from "lodash";

const setDraggable = (state = "", { type, dragValue }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_VALUE:
      return dragValue;
    default:
      return state;
  }
};

const matchedItems = (state = [], { drag, drop, type, list, updateList }) => {
  switch (type) {
    case actions.SET_ITEMS_MATCHED:
      return [...state, { drag: { ...drag }, drop: { ...drop } }];

    case actions.UPDATE_DROP_ZONE:
      if (list === "") {
        return [];
      } else {
        let _state = [...list];

        return _state;
      }
    case actions.SET_UPDATE_MATCHED_ITEMS:
      return updateList;

    default:
      return state;
  }
};

const savedForms = (state = [], { type, list, newData }) => {
  switch (type) {
    case actions.SAVED_FORM:
      if (list === "") return [];
      else {
        return [...state, { form: [...list] }];
      }
    case actions.SET_UPDATE_SAVE_FORM:
      return newData;
    default:
      return state;
  }
};

const showForm = (state = false, { type, bool }) => {
  switch (type) {
    case actions.SET_SHOW_FORM:
      return bool;
    default:
      return state;
  }
};

const formData = (state = [], { type, data }) => {
  switch (type) {
    case actions.SET_FORM_DATA:
      return data;
    default:
      return state;
  }
};

const showModel = (state = false, { type, bool }) => {
  switch (type) {
    case actions.SHOW_MODEL:
      return bool;
    default:
      return state;
  }
};

const formNewData = (state = [], { type, data }) => {
  switch (type) {
    case actions.FORM_NEW_DATA:
      return data;
    default:
      return state;
  }
};

const formIdx = (state = "", { type, idx }) => {
  switch (type) {
    case actions.SET_FORM_IDX:
      return idx;
    default:
      return state;
  }
};

export default combineReducers({
  setDraggable,
  matchedItems,
  savedForms,
  showForm,
  formData,
  showModel,
  formNewData,
  formIdx,
});
