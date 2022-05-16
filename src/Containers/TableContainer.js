import { connect } from "react-redux";
import { thunks } from "../Actions";
import Table from "../Components/UI/Atoms/Table";

import data from "../data";

const mapStateToProps = (state) => {
  return {
    data: data,
    matchedItem: state.matchedItems,
    showForm: state.showForm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPlus: (e) => {
    dispatch(thunks.handlePlus(e));
  },
  onMinus: (e) => {
    dispatch(thunks.handleMinus(e));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
