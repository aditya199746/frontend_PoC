import { connect } from "react-redux";
import RightArea from "../Components/UI/Molecules/RightArea";
import { thunks } from "../Actions";
import data from "../data";
// import { thunks, common, simulationEnd, updateDropItems } from "../actions";

const mapStateToProps = (state) => {
  return {
    data: data,
    matchedItem: state.matchedItems,
    showForm: state.showForm,
    formData: state.formData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },

  setUpdateDropZone: (from, to) => {
    dispatch(thunks.updateDropZone(from, to));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RightArea);
