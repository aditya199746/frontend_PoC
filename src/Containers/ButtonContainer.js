import { connect } from "react-redux";
import Button from "../Components/UI/Atoms/ValidateButton";

import data from "../data";
// import { thunks, common, simulationEnd, updateDropItems } from "../actions";

const mapStateToProps = (state) => {
  return {
    // firstData: data.leftElements[0],
    data: data,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
