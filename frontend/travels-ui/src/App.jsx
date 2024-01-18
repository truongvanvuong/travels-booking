import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./Layout";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout />
    </I18nextProvider>
  );
};

export default App;
