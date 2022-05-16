import { connect } from "react-redux";
import { setDraggableValue } from "../Actions";
import Elements from "../Components/UI/Atoms/Elements";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    data: data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setDraggableValue: (item) => {
    dispatch(setDraggableValue(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Elements);
