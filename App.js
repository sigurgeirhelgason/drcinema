import React from "react";
import MainStackNavigator from "./src/routes/AppNavigator";

import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}
