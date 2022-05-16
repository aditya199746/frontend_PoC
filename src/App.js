import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Reducers";
import UI from "./Containers/UIcontainer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import styled from "styled-components";

function App() {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    // middlewares.push(logger);
  }
  const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
  // const store = createStore(reducers);

  return (
    <Provider store={store}>
      <UI />
    </Provider>
  );
}

export default App;
