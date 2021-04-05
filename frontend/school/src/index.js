import React from "react";
import ReactDOM from "react-dom";
import SchoolApp from "./views/SchoolApp";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <SchoolApp/>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
