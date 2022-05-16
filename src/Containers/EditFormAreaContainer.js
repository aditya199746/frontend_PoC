import { connect } from "react-redux";
import { setShowModel, thunks } from "../Actions";
import EditForm from "../Components/UI/Atoms/EditFormArea";

import data from "../data";

const mapStateToProps = (state) => {
  return {
    data: data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleClick: (e, idx) => {
    dispatch(thunks.handleEditArea(idx));
  },
  handleDelete: (e, idx) => {
    dispatch(thunks.deleteMatchedItems(e, idx));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
