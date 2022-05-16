import { connect } from "react-redux";
import UI from "../Components/UI";

import data from "../data";
// import { thunks, common, simulationEnd, updateDropItems } from "../actions";

const mapStateToProps = (state) => {
  return {
    data: data,
    matchedItem: state.matchedItems,
    showModel: state.showModel,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UI);
