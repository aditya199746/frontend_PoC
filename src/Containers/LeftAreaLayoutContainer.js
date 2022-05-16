import { connect } from "react-redux";
import LeftAreaLayout from "../Components/UI/Layout/LeftAeaLayout";

import data from "../data";
// import { thunks, common, simulationEnd, updateDropItems } from "../actions";

const mapStateToProps = (state) => {
  return {
    data: data,
    savedForm: state.savedForms,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeftAreaLayout);
