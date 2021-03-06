import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/';
import createStore from "./redux";
import { Provider } from "react-redux";
import Layouts from "./layouts/BasicLayout";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Layouts />
      </I18nextProvider>
    </Provider>
  );
}

export default App;
