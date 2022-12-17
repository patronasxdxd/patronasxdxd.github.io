import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {BoxContentProvider} from "./context/BoxContext";
import "./index.css";

ReactDOM.render(
  
    <BoxContentProvider>
    <App/>
    </BoxContentProvider>
,  document.getElementById("root"),
);
