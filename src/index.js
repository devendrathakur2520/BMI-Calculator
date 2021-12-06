import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.jsx";
import store from './store/store';
import {Provider} from 'react-redux';
import { Users } from "./components/UserForm";
import { Home } from "./components/Home";

ReactDOM.render(
    <React.StrictMode>
      <Provider store= {store}>
      < Home/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  