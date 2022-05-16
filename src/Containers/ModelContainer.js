import { connect } from "react-redux";
import { thunks } from "../Actions";
import Modal from "../Components/UI/Layout/Model";

import data from "../data";

const mapStateToProps = (state) => {
  return {
    data: data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveModelArea: (data) => {
    dispatch(thunks.saveModelArea(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
