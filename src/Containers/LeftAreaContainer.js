import { connect } from "react-redux";
import LeftArea from "../Components/UI/Atoms/LeftArea";

import data from "../data";
// import { thunks, common, simulationEnd, updateDropItems } from "../actions";

const mapStateToProps = (state) => {
  return {
    data: data,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeftArea);
