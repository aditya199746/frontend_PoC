import { connect } from "react-redux";
import { thunks } from "../Actions";
import SaveButton from "../Components/UI/Atoms/SaveButton";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    data: data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.handleSaveForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);
