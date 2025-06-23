import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {Provider} from "react-redux";
import store from "./store/store.js"
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const persistor = persistStore(store);
root.render(
    <React.StrictMode>
               <Provider store={store}>
       <PersistGate persistor={persistor}>
     <App />
     </PersistGate>
    </Provider>
    </React.StrictMode>
);