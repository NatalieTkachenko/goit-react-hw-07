// === Lib modules ===
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// === Components ===
import App from "./App.jsx";
import { store, persistor } from "./redux/store.js";
// === Styles ===
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor }>
        <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>,
);
