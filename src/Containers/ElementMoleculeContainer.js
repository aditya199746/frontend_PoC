import { connect } from "react-redux";
import { thunks, setShowForm, setFormIdx } from "../Actions";
import ElementMolecule from "../Components/UI/Molecules/ElementMolecule";
import data from "../data";

const mapStateToProps = (state) => {
  return {
    data: data,
    forms: state.savedForms,
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayForm: (e) => {
    dispatch(thunks.showForm(e));
  },
  addForm: (e) => {
    dispatch(setShowForm(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementMolecule);
