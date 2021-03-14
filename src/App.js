import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Report from "./Components/report";
import UserForm from "./Components/UserForm";
import reducer from "./Reducers/formActionReducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div class="container">
          <UserForm />
          <Report />
        </div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
