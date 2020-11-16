import React from "react";
import Router from "../Router";
import store from "../../app/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
